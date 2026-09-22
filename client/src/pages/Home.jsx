import ProductCard from "../components/ProductCard.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import products from "../data/products.js";
import { Link } from "react-router-dom";

const categories = ["Cosmetics", "Toys", "Stationery", "Decoration", "Seasonal"];

function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <h1>MAHESH ENTERPRISES</h1>
        <p>Your trusted wholesale partner for cosmetics, toys, stationery and more.</p>
        <Link className="cta-button" to="/products">
            View Products
         </Link>
      </section>

      <section className="about-preview">
        <p>
          Mahesh Enterprises has been supplying quality wholesale products for
          general stores and retailers. We deal in cosmetics, toys, stationery,
          decoration items, and seasonal/festival products.
        </p>
      </section>

      <section className="categories-section">
        <h2>Our Categories</h2>
        <div className="category-grid">
          {categories.map((cat) => (
            <CategoryCard key={cat} name={cat} />
          ))}
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="contact-preview">
        <h2>Get in Touch</h2>
        <p>Have a query? Contact us directly on WhatsApp.</p>
        <a
          className="whatsapp-button"
          href="https://wa.me/910000000000"
          target="_blank"
          rel="noreferrer"
        >
          Chat on WhatsApp
        </a>
      </section>
    </div>
  );
}

export default Home;
