import { createSlice } from "@reduxjs/toolkit";
import "react-toastify/dist/ReactToastify.css";

// Load cart items from localStorage on initial load
const storedCartItems = localStorage.getItem("cartItems");
const initialState = {
  items: storedCartItems ? JSON.parse(storedCartItems) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      //console.log(itemIdToRemove);
      const indexToRemove = state.items.findIndex(
        (item) => item.id === itemIdToRemove
      );
      //console.log(indexToRemove);
      //console.log(state);

      if (indexToRemove != -1 && indexToRemove < state.items.length) {
        state.items.splice(indexToRemove, 1);
      }
    },
    removeWholeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      const newArray = state.items.filter((item) => item.id !== itemIdToRemove);
      state.items = newArray;
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, removeWholeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
