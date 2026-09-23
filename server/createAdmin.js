import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    const hashedPassword = await bcrypt.hash("changeme123", 10);

    await Admin.create({
      username: "admin",
      password: hashedPassword,
    });

    console.log("Admin created");
    mongoose.connection.close();
  } catch (error) {
    console.log("Failed to create admin:", error.message);
  }
};

createAdmin();