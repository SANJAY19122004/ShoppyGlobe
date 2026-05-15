import { useState, useEffect } from "react";

// Custom hook to fetch products from the API
const useFetchProducts = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Reset states when URL changes
    setLoading(true);
    setError(null);

    // Fetch data from the given URL
    fetch(url)
      .then((res) => {
        // Handle failed responses
        if (!res.ok) {
          throw new Error("Failed to fetch data. Please try again.");
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        // Storing error message in state
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetchProducts;
