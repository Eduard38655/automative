import express from "express";
import prisma from "../../../lib/prismadb.js";

const router = express.Router();

router.get("/GetRole&Permissions", async (req, res) => {
  try {
    const permissions = await prisma.permissions.findMany({});
    const roles = await prisma.roles.findMany({});

    if (!permissions || !roles) {
      return res
        .status(400)
        .json({ message: "Error fetching roles and permissions" });
    }

    return res.status(200).json({ permissions, roles });
  } catch (error) {
    console.error("There was an error", error);
    return res.status(400).json({ message: "There was an error" });
  }
});

export default router;
