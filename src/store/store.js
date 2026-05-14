import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";

// Configuring Redux store with cart and search reducers
const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
});

export default store;
