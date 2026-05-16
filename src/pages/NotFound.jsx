import { useLocation, Link } from "react-router-dom";

// NotFound component - displays 404 error for unknown routes
const NotFound = () => {
  // Get the current invalid URL path
  const location = useLocation();

  return (
    <div className="notfound-page">
      {/* 404 Error Code */}
      <h1 className="notfound-code">404</h1>

      {/* Error Title */}
      <h2 className="notfound-title">PAGE NOT FOUND</h2>

      {/* Show the invalid route that was accessed */}
      <div className="notfound-url">
        <p>THE ROUTE YOU TRIED TO ACCESS:</p>
        <code>{location.pathname}</code>
        <p>DOES NOT EXIST ON THIS  WEBSITE.</p>
      </div>

      {/* Error details */}
      <p className="notfound-message">
        THE PAGE MAY HAVE BEEN MOVED OR DELETED OR NEVER EXISTED. PLEASE CHECK THE URL AND TRY AGAIN.
      </p>

      {/* Link back to Home page */}
      <Link to="/" className="btn-primary">
        🏠 GO BACK TO HOME
      </Link>
    </div>
  );
};

export default NotFound;
