import mongoose from "mongoose";


async function connect() {
    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/test');
    if (!connection) {
        console.log("database connection error");
    }
    console.log("database connected!!");
}



export {
    connect,
}