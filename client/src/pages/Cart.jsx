import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
    </div>
  );
}

export default Cart;