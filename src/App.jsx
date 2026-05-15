import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Lazy load all components for performance optimization
const Header = lazy(() => import("./components/Header"));
const ProductList = lazy(() => import("./components/ProductList"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const Cart = lazy(() => import("./components/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

// wraps Header with page content
const Layout = ({ children }) => (
  <>
    <Suspense fallback={<div className="loading">LOADING...</div>}>
      <Header />
    </Suspense>
    <main className="main-content">
      <Suspense fallback={<div className="loading">LOADING...</div>}>
        {children}
      </Suspense>
    </main>
  </>
);

// Create browser router with all routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <ProductList />
      </Layout>
    ),
  },
  {
    path: "/product/:id",
    element: (
      <Layout>
        <ProductDetail />
      </Layout>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Layout>
        <Checkout />
      </Layout>
    ),
  },
  {
    // 404 route 
    path: "*",
    element: (
      <Suspense fallback={<div className="loading">LOADING...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
