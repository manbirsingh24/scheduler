import mongoose from "mongoose";
import Constants from "./Constants";

export async function connectMongodb() {
    try {
        mongoose.set('strictQuery', true);
        const conn = await mongoose.connect(Constants.DB_CONFIG.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)

    } catch (err) {
        console.error(err);
        process.exit(1);
    };
}