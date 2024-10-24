import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/addToCart";

export const store = configureStore({
  reducer: { cartSlice },
});
