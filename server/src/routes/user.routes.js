import { Router } from "express";
import {
  handleRegisterUser,
  handleGetCurrentUser,
  handleLoginUser,
  handleLogoutUser,
  handleUpdateUser,
} from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// post routes
router.route("/register").post(handleRegisterUser);
router.route("/login").post(handleLoginUser);
router.route("/logout").post(verifyJWT, handleLogoutUser);

// get routes
router.route("/").get(verifyJWT, handleGetCurrentUser);

// put routes
router.route("/update").put(verifyJWT, handleUpdateUser);

export default router;
