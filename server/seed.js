import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const sampleProducts = [
  { name: "Face Cream", category: "Cosmetics", price: 120, image: "/images/face-cream.jpg" },
  { name: "Toy Car", category: "Toys", price: 250, image: "/images/toy-car.jpg" },
  { name: "Notebook Set", category: "Stationery", price: 90, image: "/images/notebook-set.jpg" },
  { name: "Diwali Diya Set", category: "Seasonal", price: 180, image: "/images/diya-set.jpg" },
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await Product.deleteMany();
    console.log("Old products removed");

    await Product.insertMany(sampleProducts);
    console.log("Sample products added");

    mongoose.connection.close();
  } catch (error) {
    console.log("Seeding failed:", error.message);
  }
};

seedDatabase();