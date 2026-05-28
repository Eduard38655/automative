import bcrypt from "bcrypt";
import express from "express";
import prisma from "../../../lib/prismadb.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { data, organizationRole, OrganizationPermissions } = req.body;

  const userDetails = {
    full_name: data.name,
    email: data.email,
    password_hash: await bcrypt.hash(data.password, 10),
  };

  try {
    const existingUser = await prisma.users.findUnique({
      where: {
        email: userDetails.email,
      },
    });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email is aready registered", ok: false });
    }

    const creatingUser = await prisma.users.create({ data: userDetails });

    if (!creatingUser) {
      return res
        .status(400)
        .json({ message: "There was an error creating new user", ok: false });
    }

    const findRole = await prisma.roles.findUnique({
      where: {
        id: Number(organizationRole),
      },
    });

    if (!findRole) {
      return res
        .status(400)
        .json({ message: "There was an error creating new user", ok: false });
    }

    const insert_role = await prisma.user_roles.create({
      data: {
        user_id: creatingUser.id,
        role_id: findRole.id,
      },
    });

    if (!insert_role) {
      return res
        .status(400)
        .json({ message: "There was an error creating new user", ok: false });
    }
    for (const permission of OrganizationPermissions) {
      await prisma.user_permissions.create({
        data: {
          user_id: creatingUser.id,
          permission_id: Number(permission.id),
        },
      });
    }

    return res
      .status(201)
      .json({ message: "User created successfully", ok: true });
  } catch (error) {
    console.error("There was an error", error);
    return res.status(400).json({ message: "There was an error", ok: false });
  }
});

export default router;
