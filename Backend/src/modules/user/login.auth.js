import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import prisma from "../../../lib/prismadb.js";
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required", ok: false });
    }

    const user = await prisma.users.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isValid = await bcrypt.compare(password, user.password_hash);

    if (!isValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const getUser_Permissions = await prisma.user_permissions.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        permissions: true,
      },
    });

    if (!getUser_Permissions || getUser_Permissions.length === 0) {
      return res.status(401).json({ message: "Invalid credentials", ok: null });
    }

    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not defined");
      return res
        .status(500)
        .json({ message: "Server configuration error", ok: false });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );
  const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    };
    res.cookie("token", token, cookieOptions);

    console.log("User permissions:", user);
    return res.status(200).json({
      message: "Login successful",
      ok: true,
      data: getUser_Permissions,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(500)
      .json({ message: "Internal server error", ok: false });
  }
});

 
export default router;
