import express, { json } from "express";
import dotenv from "dotenv";
import { encryptData, decryptData } from "./utils/index";
import { connectToDatabase } from "./database/db";
import { userRouter } from "./routes/user";
import cors from 'cors';
async function startServer() {
    try {

        dotenv.config();
        const PORT = process.env.PORT ?? 3030;
        const app = express();

        app.use(express.json());
        app.use(cors());

        // const encrypted: string = encryptData("jay");
        // const decrypted: string = decryptData(encrypted);

        // console.log(encrypted);
        // console.log(decrypted);

        // await connectToDatabase();

        app.use("/user", userRouter);

        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}


startServer();