import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../store/cartSlice";

// CartItem component 
const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      {/* Product Image with lazy loading */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="cart-item-image"
        loading="lazy"
      />

      <div className="cart-item-info">
        <h3 className="cart-item-title">{item.title}</h3>

        <p className="cart-item-price">${item.price}</p>

        <div className="quantity-controls">
          {/* Decrease quantity button  */}
          <button
            className="qty-btn"
            onClick={() => dispatch(decreaseQuantity(item.id))}
          >
            −
          </button>

          <span className="qty-value">{item.quantity}</span>

          {/* Increase quantity button */}
          <button
            className="qty-btn"
            onClick={() => dispatch(increaseQuantity(item.id))}
          >
            +
          </button>
        </div>

        {/* Total price for this item */}
        <p className="cart-item-total">
          TOTAL: ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      {/* Remove from cart button */}
      <button
        className="btn-remove"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        🗑️ REMOVE
      </button>
    </div>
  );
};

export default CartItem;
