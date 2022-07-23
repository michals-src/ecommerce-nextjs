import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../slice/modalSlice";
import productsSlice from "../slice/productsSlice";

export const Store = configureStore({
  reducer: {
    modal: modalReducer,
    products: productsSlice,
  },
});
