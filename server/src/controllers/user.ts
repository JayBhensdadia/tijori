
import { Request, Response } from "express";
import jwt from 'jsonwebtoken';

export const login = (req: Request, res: Response) => {


    try {
        console.log(req.body);
        const { email, password } = req.body;

        if (email == 'jayvpatel29@gmail.com' && password == 'Jay@123') {
            const token = jwt.sign({ email }, "SECRET", { expiresIn: 60 });
            res.cookie("token", token, {
                expires: new Date(Date.now() + (10 * 1000)),
            })
            res.json({ msg: "login successfull!!!!" });
        }
    } catch (error) {
        res.status(400).json({ msg: "invalid credentials" });
    }
}