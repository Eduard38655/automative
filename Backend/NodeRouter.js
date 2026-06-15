 

import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";

import path from "path";
import { fileURLToPath } from "url";
import GetAllSales from "./src/modules/SalesOverWiew/GetAllSales.js";
import GetRolePermissions from "./src/modules/user/GetRole&Permissions.js";
import LoginRouter from "./src/modules/user/login.auth.js";
import SignupRouter from "./src/modules/user/signup.js";
import GetAllCars from "./src/modules/vehicle-api/GetAllCars.js";
const app = express();

// Necesario para __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
// Configure CORS via corsOptions below (credentials enabled there)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
 
 
 
const allowedOrigins = [
  "https://eduard38655.github.io",
  "https://Eduard38655.github.io",
  "http://localhost:3000",
  "http://localhost:5173",
  "https://eduard38655.github.io/socialmedia/",
  "https://socialmedia-khe0.onrender.com",
 
];

const corsOptions = {
  origin: function (origin, callback) {
    console.log("ORIGIN:", origin);
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use("/api/v1/auth", SignupRouter);
app.use("/api/v1/auth", GetRolePermissions);
app.use("/api/v1/auth", LoginRouter);
app.use("/api/v1/cars", GetAllCars);
app.use("/api/v1/sales", GetAllSales);

BigInt.prototype.toJSON = function () {
  return Number(this)
}
// Configuración
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

// Levantar servidor
app.listen(PORT, HOST, () => {
  console.log(`Servidor corriendo en http://${HOST}:${PORT}`);
});
