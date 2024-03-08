import { NextFunction } from "express";
import mongoose, { Document } from "mongoose";



const Schema = mongoose.Schema;

const PasswordSchema = new Schema({
    url: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


const Password = mongoose.model('Password', PasswordSchema);


export {
    Password
}