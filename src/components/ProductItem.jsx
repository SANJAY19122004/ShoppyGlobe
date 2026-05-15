import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

// ProductItem component
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  // Handle adding product to cart using Redux
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
      }),
    );
  };

  return (
    <div className="product-card">
      {/* Product Image with lazy loading */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
        loading="lazy"
      />

      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <p className="product-rating">⭐ {product.rating}</p>

        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="btn-details">
            VIEW DETAILS
          </Link>

          <button className="btn-add-cart" onClick={handleAddToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
