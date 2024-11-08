import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProductIndex = state.value.findIndex(
        (item) => item.prodDetails.id === action.payload.prodDetails.id
      );
      if (existingProductIndex >= 0) {
        // If product exists, update the quantity
        state.value[existingProductIndex].quantity += action.payload.quantity;
      } else {
        // If product does not exist, add it to the cart
        state.value.push({
          ...action.payload,
          quantity: action.payload.quantity, // Default quantity 1 already sending
        });
      }
    },
    removeToCart: (state, action) => {
      // remove particular product in which user clicked
      state.value = state.value.filter(
        (product) => product.prodDetails.id !== action.payload
      );
    },
    updateAddQuantity(state, action) {
      // update quantity from quantity pulse button on cart
      const existingProduct = state.value.find(
        (item) => item.prodDetails.id === action.payload.prodDetails.id
      );

      if (existingProduct.quantity > 0 && existingProduct.quantity < 10) {
        existingProduct.quantity += 1;
      } else {
        existingProduct.quantity = quantity;
      }
    },
    updateRemoveQuantity(state, action) {
      // update quantity from quantity minus button on cart
      const existingProduct = state.value.find(
        (item) => item.prodDetails.id === action.payload.prodDetails.id
      );

      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        existingProduct.quantity = quantity;
      }
    },
    clearCart(state, action) {
      state.value = [];
    },
  },
});
export const {
  addToCart,
  removeToCart,
  clearCart,
  updateAddQuantity,
  updateRemoveQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
