import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password,
      },
    });
    res.status(201).json({ message: "User Created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create user !" });
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) return res.status(401).json({ message: "Invalid credential" });

    if (user.password === password) {
      const age = 1000 * 60 * 60 * 24;
      const token = jwt.sign(
        {
          id: user.id,
          isAdmin: true,
        },
        process.env.JWT_SECRET_CODE,
        { expiresIn: age }
      );

      const { password: userPassword, ...userInfo } = user;

      res
        .cookie("token", token, {
          httpOnly: true,
          //secure:true,
          maxAge: age,
        })
        .status(200)
        .json(userInfo);
    } else {
      return res.status(404).json({ message: "Invalid credential" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to login !" });
  }
};
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
