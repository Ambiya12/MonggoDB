import mongoose from "mongoose";
import 'dotenv/config';

const mongoDB = process.env.MONGO_URL;

const connectDB = async () => {
    try {
      await mongoose.connect(mongoDB,);
      console.log("✅ Successfully connected to MongoDB");
    } catch (error) {
      console.error("❌ MongoDB connection error:", error);
      process.exit(1); // Exit the process if connection fails
    }
  };

  connectDB();

  export default connectDB;
