
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const login = (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (email == 'jayvpatel29@gmail.com' && password == 'Jay@123') {
            const token = jwt.sign({ email }, "SECRET", { expiresIn: 60 });
            res.json({ token });
        }
    } catch (error) {
        res.status(400).json({ msg: "invalid credentials" });
    }
}