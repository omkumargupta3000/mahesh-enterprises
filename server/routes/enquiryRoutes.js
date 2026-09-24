import express from "express";
import { createEnquiry, getEnquiries } from "../controllers/enquiryController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", createEnquiry);
router.get("/", protect, getEnquiries);

export default router;