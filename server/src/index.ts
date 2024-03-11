import express, { json } from "express";
import dotenv from "dotenv";
import { encryptData, decryptData } from "./utils/index";
import { connectToDatabase } from "./database/db";
import { userRouter } from "./routes/user";
import cors from 'cors';
import cookieparser from 'cookie-parser';
async function startServer() {
    try {

        dotenv.config();
        const PORT = process.env.PORT ?? 3030;
        const app = express();

        app.use(express.json());
        app.use(cors(
            {
                origin: "http://localhost:5173",
                credentials: true
            }
        ));
        app.use(cookieparser());

        // const encrypted: string = encryptData("jay");
        // const decrypted: string = decryptData(encrypted);

        // console.log(encrypted);
        // console.log(decrypted);

        await connectToDatabase();

        app.use("/user", userRouter);

        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
}


startServer();