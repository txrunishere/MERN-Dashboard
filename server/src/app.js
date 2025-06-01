import express from "express";
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
  origin: process.env.CORS_URL,
  credentials: true
}))

import healthcheckRouter from "./routes/healthcheck.routes.js";
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/user", userRouter);

export { app };
