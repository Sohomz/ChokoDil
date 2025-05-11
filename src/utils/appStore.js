import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import restaurantReducer from "./restaurantSlice";

// Load cart items from localStorage on initial load
const storedCartItems = localStorage.getItem("cartItems");
const initialCartState = storedCartItems
  ? { items: JSON.parse(storedCartItems) }
  : { items: [] };

const appstore = configureStore({
  reducer: {
    cart: cartSlice,
    restaurants: restaurantReducer,
  },

  preloadedState: {
    cart: initialCartState,
  },
});

export default appstore;
