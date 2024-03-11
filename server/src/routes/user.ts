import { Router, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { login } from "../controllers/user";
import { userMiddleware } from "../middlewares/user";

export const userRouter = Router();


userRouter.post("/login", login);


userRouter.get("/getpasswords", userMiddleware, (req: Request, res: Response) => {
    res.json({ msg: "hi there" });
});