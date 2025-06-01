import { User } from "../models/user.model.js";
import expressAsyncHandler from "express-async-handler";
import jwt from 'jsonwebtoken'

const verifyJWT = expressAsyncHandler(async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(400).json({
      error: "Token not found!!",
    });
  }

  const payload = jwt.verify(token, process.env.JWT_SECRET)
  const user = await User.findById(payload.userId).select("-password")

  if (!user) {
    return res.status(400).json({
      error: "User not Found!!",
    });
  }

  req.user = user;

  next();
});

export { verifyJWT };
