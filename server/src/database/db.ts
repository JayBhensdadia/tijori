import mongoose from "mongoose";
import dotenv from 'dotenv';


dotenv.config();
export function connectToDatabase() {
    const MONGO_URL = process.env.MONGO_URL;
    return mongoose.connect(MONGO_URL);
}