import express from "express";
import prisma from "../../../lib/prismadb.js";
import { verifyToken } from "../../middlewares/Token.auth.js";
const router = express.Router();
router.get("/GetAllSales", verifyToken, async (req, res) => {
  try {
    const token = req.cookies.token;

  console.log("Token from cookie:", token);
    const salesData = await prisma.sales.findMany({
      include: {
        customers: true,
        vehicles: {
          include: {
            leads: true,
          },
        },
      },
    });

    const logsData = await prisma.audit_logs.findMany({
      include: {
        users: true,
      },
    });

    if (!salesData || !logsData) {
      return res
        .status(404)
        .json({ message: "No sales or logs found", ok: false });
    }

    return res
      .status(200)
      .json({ ok: true, data: salesData, logsData: logsData });
  } catch (error) {
    console.error("There was an error", error);
    return res.status(400).json({ message: "There was an error", ok: false });
  }
});

export default router;
