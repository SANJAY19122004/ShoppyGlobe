import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

// Cart component - displays all items added to cart
const Cart = () => {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price of all items in cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // Show message if cart is empty
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>YOUR CART IS EMPTY! 🛒</h2>
        <p>LOOKS LIKE YOU HAVENT ADDED ANYTHING YET.</p>
        <Link to="/" className="btn-primary">
          CCONTINUE SHOPPING
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>YOUR CART</h1>

      {/* Render list of cart items with unique keys */}
      <div className="cart-items-list">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Cart Summary */}
      <div className="cart-summary">
        <h2>TOTAL: ${totalPrice.toFixed(2)}</h2>

        {/* Proceed to Checkout button */}
        <Link to="/checkout" className="btn-primary">
          PROCEED TO CHECKOUT
        </Link>

        {/* Continue Shopping link */}
        <Link to="/" className="btn-secondary">
          CONTINUE SHOPPING
        </Link>
      </div>
    </div>
  );
};

export default Cart;
