import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    // Obtener el token desde cookie o desde el header Authorization
    const authHeader = req.headers.authorization;
    const token = req.cookies?.token || (authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null);

   
    if (!token) {
      return res.status(401).json({
        message: "Token no proporcionado",
      });
    }

    // Verificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Guardar datos del usuario en la request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token inválido o expirado",
    });
  }
};
