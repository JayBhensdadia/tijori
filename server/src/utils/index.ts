import CryptoJS from "crypto-js";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY ?? "Jay@1234";
export function encryptData(data: string): string {
    console.log(SECRET_KEY);
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
}


export function decryptData(data: string): string {

    var bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}