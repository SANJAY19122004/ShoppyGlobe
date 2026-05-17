# SHOPPYGLOBE

A basic e-commerce app built with React and Vite.

## REPOSITORY LINK

https://github.com/SANJAY19122004/ShoppyGlobe

## WHAT IT DOES

- Browse products fetched from an API
- Search products by name
- View detailed info about each product
- Add products to cart
- Adjust quantity or remove items from cart
- Checkout with form validation
- Order placement clears cart and redirects home
- 404 page for unknown routes

## BUILT WITH

- React 18
- Vite
- React Router DOM (createBrowserRouter)
- Redux Toolkit
- CSS

## HOW TO RUN

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

## FOLDER STRUCTURE

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

## HOW TO USE

- Browse products on the home page
- Use search bar to filter products by name
- Click any product to view full details
- Click Add to Cart to add products
- Go to Cart to manage quantities or remove items
- Click Checkout to place your order

## REMOVED NODE MODULES BEFORE SUBMISSION