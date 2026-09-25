import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

function Navbar() {
  const location = useLocation();
  const { cartItems } = useCart();
const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

const navItems = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/cart", label: `Cart (${cartCount})` },
];

  return (
    <nav className="navbar">
      <div className="navbar-logo">MAHESH ENTERPRISES</div>
      <ul className="navbar-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;