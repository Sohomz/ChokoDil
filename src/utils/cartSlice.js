import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const { id, index } = action.payload; // Extract both values
      //index value check
      if (index >= 0 && index < state.items.length) {
        state.items.splice(index, 1); //Remove 1 element from exact index passed from map func Cart.js
        console.log("Updated State Items:", state.items);
      } else {
        console.log("Invalid index, item not found!");
      }
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
