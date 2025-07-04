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

// Function to save cart to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart.items); // Only save cart items
    localStorage.setItem("cartItems", serializedState);
  } catch (e) {
    console.warn("Could not save state to localStorage", e);
  }
};

appstore.subscribe(() => {
  saveState(appstore.getState());
});

export default appstore;
