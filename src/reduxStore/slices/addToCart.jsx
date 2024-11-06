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
      console.log(action.payload, "payload");
      state.value = state.value.filter(
        (product) => product.prod_id !== action.payload.prod_id
      );
      // if (state.value < 1) state.value = 0;
      // else state.value -= 1;
    },
  },
});
export const { addToCart, removeToCart } = cartSlice.actions;

export default cartSlice.reducer;
