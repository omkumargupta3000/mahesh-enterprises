import mongoose from "mongoose";

// This is the shape of a product in our database.
// We are not saving anything to MongoDB yet in v0.1,
// but this model is ready for when we connect the database.

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  availability: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
