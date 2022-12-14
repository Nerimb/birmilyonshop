import { configureStore, createReducer } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";
import itemReducer from "./slices/itemSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
    item: itemReducer,
    cart: cartReducer,
  },
});
