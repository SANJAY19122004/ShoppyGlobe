import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/cartSlice";

// Checkout page with order form and cart summary
const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Form field states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // Order placed message state
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Form validation errors
  const [errors, setErrors] = useState({});

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Enter a valid email";
    if (!address.trim()) newErrors.address = "Address is required";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(phone))
      newErrors.phone = "Enter a valid 10 digit phone number";
    return newErrors;
  };

  // Handle place order button click
  const handlePlaceOrder = () => {
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }

    // Show order placed message
    setOrderPlaced(true);

    // Clear cart from Redux store
    dispatch(clearCart());

    // Redirect to home page after 2 seconds
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  // If cart is empty redirect message
  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="empty-cart">
        <h2>NO ITEMS IN CART!</h2>
        <a href="/" className="btn-primary">
          GO SHOPPING
        </a>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>CHECK OUT</h1>

      {/* Show order placed message */}
      {orderPlaced && (
        <div className="order-success">
          ✅ ORDER PLACED! REDIRECTING TO HOME...
        </div>
      )}

      <div className="checkout-layout">
        {/* Order Form */}
        <div className="checkout-form-section">
          <h2>YOUR DETAILS</h2>
          <div className="checkout-form">
            {/* Name Field */}
            <div className="form-group">
              <label>FULL NAME</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label>EMAIL</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            {/* Address Field */}
            <div className="form-group">
              <label>DELIVERY ADDRESS</label>
              <textarea
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
              />
              {errors.address && (
                <span className="error">{errors.address}</span>
              )}
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label>PHONE NUMBER</label>
              <input
                type="text"
                placeholder="Enter 10 digit phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            {/* Place Order Button */}
            <button className="btn-place-order" onClick={handlePlaceOrder}>
              PLACE ORDER
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="checkout-summary">
          <h2>ORDER SUMMARY</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="summary-item">
              <span>
                {item.title} x {item.quantity}
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="summary-total">
            <strong>Total: ${totalPrice.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
