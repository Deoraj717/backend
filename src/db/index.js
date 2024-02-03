import mongoose from "mongoose";
import {DB_NAME} from "../constants";

const connectDB=async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_MANE}`);
    }catch(err){
        console.log("MongoDB connection error ",err);
        process.exit(1);
    }
}

export default connectDB;