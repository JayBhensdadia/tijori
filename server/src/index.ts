import express, { Request, Response } from 'express';
import { connect } from './database/db.js';
import dotenv from 'dotenv';

const app = express();



async function startServer() {
    try {

        const connection = await connect();

        console.log("database connection successfull");

        app.listen(3000, () => {
            console.log("server running on port 3000");
        });

    } catch (error) {
        console.log("error!!!")
    }


}

startServer();

