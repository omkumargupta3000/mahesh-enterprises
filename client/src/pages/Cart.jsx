import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productList = cartItems
      .map((item) => `${item.name} (x${item.quantity})`)
      .join(", ");

    fetch("http://localhost:5001/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        productName: "Multiple Products",
        message: productList,
      }),
    }).then(() => {
      setSubmitted(true);
      clearCart();
    });
  };

  if (submitted) {
    return (
      <div className="cart-page">
        <h1>Thank You</h1>
        <p>Your enquiry has been submitted. We'll contact you soon.</p>
        <Link to="/products">Continue Browsing</Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Enquiry Cart</h1>
        <p>Your cart is empty.</p>
        <Link to="/products">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Enquiry Cart</h1>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>
                <button className="delete-button" onClick={() => removeFromCart(item._id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="cart-total">Total items: {totalItems}</p>

      <form className="admin-form" onSubmit={handleSubmit} style={{ flexDirection: "column", maxWidth: "400px", marginTop: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Enquiry</button>
      </form>
    </div>
  );
}

export default Cart;