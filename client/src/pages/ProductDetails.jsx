import { useParams, Link } from "react-router-dom";
import products from "../data/products.js";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="product-details-page">
        <h1>Product not found</h1>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <img src={product.image} alt={product.name} className="product-details-image" />
      <h1>{product.name}</h1>
      <p className="product-category">{product.category}</p>
      <p className="product-price">₹{product.price}</p>
      <Link to="/products">Back to Products</Link>
    </div>
  );
}

export default ProductDetails;