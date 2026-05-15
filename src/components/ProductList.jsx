import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../store/searchSlice";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";

// ProductList component 
const ProductList = () => {
  const dispatch = useDispatch();

  const searchQuery = useSelector((state) => state.search.query);

  // Use custom hook to fetch products from API
  const { data, loading, error } = useFetchProducts(
    "https://dummyjson.com/products?limit=30",
  );

  // Filter products 
  const filteredProducts = data?.products?.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Show loading state
  if (loading) {
    return <div className="loading">LOADING PRODUCTS...</div>;
  }

  // Show error state if fetch failed
  if (error) {
    return (
      <div className="error-message">
        <h2>SOMETHING WENT WRONG!</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="product-list-page">
      <h1>ALL PRODUCTS</h1>

      <input
        type="text"
        className="search-bar"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />

      {filteredProducts?.length === 0 ? (
        <p className="no-results">NO PRODUCTS FOUND FOR "{searchQuery}"</p>
      ) : (
        // Render product list with unique keys
        <div className="products-grid">
          {filteredProducts?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
