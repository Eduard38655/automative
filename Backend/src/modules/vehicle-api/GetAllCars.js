import express from "express";
import prisma from "../../../lib/prismadb.js";
const router = express.Router();

router.get("/GetAllCars", async (req, res) => {
  try {
    const GetAllCars = await prisma.models.findMany({
      include: {
        vehicles: {
          include: {
            vehicle_images: true,
            models: true,
            vehicle_status_history: true,
            vehicle_features:{
              include: {
                features: true
              }
            },
          },
        },
        brands: true,
      },
    });

    //vehicles: true

    return res.status(200).json({ ok: true, data: GetAllCars });
  } catch (error) {
    console.error("There was an error", error);
    return res.status(400).json({ message: "There was an error", ok: false });
  }
});

export default router;
