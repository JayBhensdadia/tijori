

import { Request, Response } from "express";
import { Password } from "../model/passwords";
import { encryptData, decryptData } from "../utils/index";

const getPasswords = async (req: Request, res: Response) => {

    try {
        const result = await Password.find({});
        if (!result) {
            res.status(500).json({ msg: "internal server error" });
        }

        const passwords = result.map(password => {
            return { url: password.url, password: decryptData(password.password) }
        })

        res.json(passwords);

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "internal server error" });
    }
}


const savePassword = async (req: Request, res: Response) => {
    try {

        const { url, password } = req.body;

        const newPassword = new Password({
            url,
            password: encryptData(password)
        });

        await newPassword.save();

        res.json({ msg: "password saved!!!" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "internal server error" });
    }
}

export {
    getPasswords,
    savePassword
}