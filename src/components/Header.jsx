import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Header component with navigation and cart icon
const Header = () => {
  // Get cart items from Redux store 
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total number of items in cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          🛍️ SHOPPY GLOBE
        </Link>

        {/* Navigation Links */}
        <nav className="header-nav">
          <Link to="/" className="nav-link">
            HOME
          </Link>
          <Link to="/cart" className="nav-link cart-link">
            🛒 CART
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
