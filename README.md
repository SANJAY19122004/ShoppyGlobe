# ShoppyGlobe

A basic e-commerce app built with React and Vite.

## Repository Link

https://github.com/SANJAY19122004/ShoppyGlobe

## What it does

- Browse products fetched from an API
- Search products by name
- View detailed info about each product
- Add products to cart
- Adjust quantity or remove items from cart
- Checkout with form validation
- Order placement clears cart and redirects home
- 404 page for unknown routes

## Built with

- React 18
- Vite
- React Router DOM (createBrowserRouter)
- Redux Toolkit
- CSS

## How to run

Make sure Node.js is installed.

1. Clone the repo:
bash
   git clone https://github.com/SANJAY19122004/ShoppyGlobe.git
   cd ShoppyGlobe

2. Install packages:
bash
   npm install

3. Start the app:
bash
   npm run dev

4. Open `http://localhost:5173` in your browser

## Folder structure

src/
|--components/
│   |-- Header.jsx
│   |-- ProductList.jsx
│   |-- ProductItem.jsx
│   |-- ProductDetail.jsx
│   |-- Cart.jsx
│   |-- CartItem.jsx
|--pages/
│   |-- Checkout.jsx
│   |-- NotFound.jsx
|--store/
│   |-- store.js
│   |-- cartSlice.js
│   |-- searchSlice.js
|--hooks/
│   |-- useFetchProducts.js
|--App.jsx
|-- main.jsx

## How to use

- Browse products on the home page
- Use search bar to filter products by name
- Click any product to view full details
- Click Add to Cart to add products
- Go to Cart to manage quantities or remove items
- Click Checkout to place your order