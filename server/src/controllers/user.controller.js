import asyncHandler from "express-async-handler";
import { User } from "../models/user.model.js";
import { z } from "zod";
import generateToken from "../utils/generateToken.js";

/*
  @desc   Register User
  router   POST /api/v1/user/register
  @access   Public
*/
const handleRegisterUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const validationObject = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
  });

  const { success, error } = validationObject.safeParse({
    username,
    email,
    password,
  });

  if (!success) {
    return res.status(400).json({
      error: error.errors.map((e) => e.message),
    });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      error: "User already exists!!",
    });
  }

  const user = await User.create({
    username,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      message: `User with email ${user.email} created successfully!!`,
      userData: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } else {
    return res.status(400).json({
      error: "Invalid User Data",
    });
  }
});

/*
  @desc   Login User/set token
  router   POST /api/v1/user/login
  @access   Public
*/
const handleLoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    if (!(await user.isPasswordCorrect(password))) {
      return res.status(400).json({
        error: "Password Invalid",
      });
    } else {
      generateToken(res, user._id);
      res.status(200).json({
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
        },
      });
    }
  } else {
    return res.status(404).json({
      error: "User not found",
    });
  }
});

/*
  @desc   Logout User/delete token
  router   POST /api/v1/user/logout
  @access   Private
*/
const handleLogoutUser = asyncHandler(async (_, res) => {
  return res
    .status(200)
    .cookie("token", "", { httpOnly: true, expires: new Date(0) })
    .json({
      message: "User Logout SuccessFully!!",
    });
});

/*
  @desc   Get Current User
  router   GET /api/v1/user/
  @access   Private
*/
const handleGetCurrentUser = asyncHandler(async (req, res) => {
  return res.status(200).json({
    user: req.user,
  });
});

/*
  @desc   Update User
  router   PUT /api/v1/user/
  @access   Private
*/
const handleUpdateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    if (req.body.username) {
      user.username = req.body.username || user.username;
    }
    if (req.body.email) {
      user.email = req.body.email || user.email;
    }
    if (req.body.password) {
      user.password = req.body.password || user.password;
    }

    const updatedUser = await user.save();

    return res.status(200).json({
      message: `User with email ${user.email} updated successfully`,
      userData: {
        _id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
      },
    });
  } else {
    return res.status(404).json({
      error: "User not Found!!",
    });
  }
});

export {
  handleRegisterUser,
  handleGetCurrentUser,
  handleLoginUser,
  handleLogoutUser,
  handleUpdateUser,
};
