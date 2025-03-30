import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import restaurantReducer from "./restaurantSlice";

const appstore = configureStore({
  reducer: {
    cart: cartSlice,
    restaurants: restaurantReducer,
  },
});

export default appstore;
