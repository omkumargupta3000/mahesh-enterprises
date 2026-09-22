import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) {
    return (
      <div className="product-details-page">
        <h1>Product not found</h1>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  if (!product) {
    return <div className="product-details-page"><p>Loading...</p></div>;
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