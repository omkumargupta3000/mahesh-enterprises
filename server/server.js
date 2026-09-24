import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

// When we are ready to use MongoDB, uncomment the line below.
 connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Mahesh Enterprises API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/admin", authRoutes);
app.use("/api/enquiries", enquiryRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
