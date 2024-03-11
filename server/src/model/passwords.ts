import mongoose from "mongoose";



const PasswordSchema = new mongoose.Schema({

    url: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


export const Password = mongoose.model('Password', PasswordSchema);