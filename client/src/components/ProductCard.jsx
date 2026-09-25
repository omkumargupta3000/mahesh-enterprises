import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product._id}`} className="product-card-link">
        <img src={product.image} alt={product.name} className="product-image" />
        <h3>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">₹{product.price}</p>
      </Link>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;