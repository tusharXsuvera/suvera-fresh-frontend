import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    value: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.value += 1;
    },
    removeToCart: (state, action) => {
      if (state.value < 1) state.value = 0;
      else state.value -= 1;
    },
  },
});
export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
