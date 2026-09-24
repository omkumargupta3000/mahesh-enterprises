import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [enquiryData, setEnquiryData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch(() => setNotFound(true));
  }, [id]);

  const handleChange = (e) => {
    setEnquiryData({ ...enquiryData, [e.target.name]: e.target.value });
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5001/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...enquiryData, productName: product.name }),
    }).then(() => {
      setSubmitted(true);
      setEnquiryData({ name: "", phone: "", message: "" });
    });
  };

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

      <div className="enquiry-box">
        <h2>Enquire About This Product</h2>
        {submitted ? (
          <p className="enquiry-success">Thanks! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleEnquirySubmit} className="admin-form">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={enquiryData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              value={enquiryData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="message"
              placeholder="Message (optional)"
              value={enquiryData.message}
              onChange={handleChange}
            />
            <button type="submit">Send Enquiry</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;