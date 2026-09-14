function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="product-category">{product.category}</p>
      <p className="product-price">₹{product.price}</p>
    </div>
  );
}

export default ProductCard;
