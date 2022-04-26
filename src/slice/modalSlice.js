import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: () => {},
  visible: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    innerModal: (state, action) => {
      state.value = action.payload;
      state.visible = true;
    },
    removeModal: (state, action) => {
      state.value = action.payload;
      state.visible = false;
    },
  },
});

export const { innerModal, removeModal } = modalSlice.actions;
export const selectModal = state => state.modal;

export default modalSlice.reducer;
