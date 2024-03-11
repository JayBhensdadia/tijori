import { Router, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { login } from "../controllers/user";
import { userMiddleware } from "../middlewares/user";

import { getPasswords, savePassword } from "../controllers/passwords";

export const userRouter = Router();


userRouter.post("/login", login);


userRouter.get("/getpasswords", userMiddleware, getPasswords);

userRouter.post("/password", userMiddleware, savePassword);