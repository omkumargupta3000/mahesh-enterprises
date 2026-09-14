import ProductCard from "../components/ProductCard.jsx";
import products from "../data/products.js";

function Products() {
  return (
    <div className="products-page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
