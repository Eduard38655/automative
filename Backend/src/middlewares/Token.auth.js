import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
  const token = req.cookies.token;

  const user_permissions = req.cookies.user_permissions;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized", ok: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    req.user_permissions = user_permissions ? JSON.parse(user_permissions) : [];
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired", ok: false });
    }
    return res.status(403).json({ message: "Invalid token", ok: false });
  }
}
