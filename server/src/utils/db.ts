import mongoose, { Types } from "mongoose";
import config from "../config";

export default async () => {
    try {
        await mongoose.connect( config.mongo_uri as string );
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}