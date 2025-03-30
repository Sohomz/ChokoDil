import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appstore = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default appstore;
