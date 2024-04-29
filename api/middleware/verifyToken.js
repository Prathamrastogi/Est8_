import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(token, process.env.JWT_SECRET_CODE, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token not valid!" });
    req.userId = payload.id;
    next();
  });
};
export const verifyPostToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Not Authenticated!" });

  jwt.verify(token, process.env.JWT_SECRET_CODE, async (err, payload) => {
    if (err) return res.status(403).json({ message: "Token not valid!" });
    const code = payload.id;
    req.locals = {
      code: code,
    };
    next();
  });
};
