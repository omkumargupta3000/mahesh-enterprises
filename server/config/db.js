import mongoose from "mongoose";

// This function will connect our backend to MongoDB.
// It is not being called yet in server.js (see the comment there).
// We will start using this once we reach the "Connect MongoDB" step.
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed:", error.message);
  }
};

export default connectDB;
