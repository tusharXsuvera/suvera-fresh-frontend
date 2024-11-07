import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
    removeToCart: (state, action) => {
      state.value = state.value.filter(
        (product) => product.prodDetails.id !== action.payload
      );
    },
  },
});
export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
