import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import useFetchProducts from "../hooks/useFetchProducts";

// ProductDetail component 
const ProductDetail = () => {
  // Get product id from URL params
  const { id } = useParams();
  const dispatch = useDispatch();

  // Fetch single product details using custom hook
  const {
    data: product,
    loading,
    error,
  } = useFetchProducts(`https://dummyjson.com/products/${id}`);

  // Handle adding product to cart
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

  // Show loading state
  if (loading) {
    return <div className="loading">LOADING PRODUCT DETAILS...</div>;
  }

  // Show error if fetch failed
  if (error) {
    return (
      <div className="error-message">
        <h2>SOMETHING WENT WRONG!</h2>
        <p>{error}</p>
        <Link to="/" className="btn-primary">
          BACK TO HOME
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-card">
        {/* Product Image with lazy loading */}
        <img
          src={product?.thumbnail}
          alt={product?.title}
          className="detail-image"
          loading="lazy"
        />

        <div className="detail-info">
          {/* Product Title */}
          <h1>{product?.title}</h1>

          {/* Product Brand */}
          <p className="detail-brand">Brand: {product?.brand}</p>

          {/* Product Price */}
          <p className="detail-price">${product?.price}</p>

          {/* Product Rating */}
          <p className="detail-rating">⭐ {product?.rating} / 5</p>

          {/* Product Category */}
          <p className="detail-category">Category: {product?.category}</p>

          {/* Product Description */}
          <p className="detail-description">{product?.description}</p>

          {/* Product Stock */}
          <p className="detail-stock">
            {product?.stock > 0
              ? `✅ In Stock (${product?.stock} left)`
              : "❌ Out of Stock"}
          </p>

          <div className="detail-actions">
            {/* Add to Cart button */}
            <button className="btn-add-cart" onClick={handleAddToCart}>
              ADD TO CART
            </button>

            {/* Back to Home link */}
            <Link to="/" className="btn-primary">
              ← BACK TO HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
