import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../slice/modalSlice";

export const modalStore = configureStore({
  reducer: {
    modal: modalReducer,
  },
});
