import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect(ENV.DB_URL)
        console.log(`Connected to MONGODB: ${conn.connection.host}`)
    } catch (error) {
        console.error("Failed to connect to MONGODB")
        process.exit(1)   //1 means fail and 0 means success
    }
}