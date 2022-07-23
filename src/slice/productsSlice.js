import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Slug : ID w celu znalezienia id pod slug
  products: {},
  basket: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsAdd: (state, action) => {
      return { ...state, products: action.payload };
    },

    /**
     *
     * @param state
     * @param {product slug} action
     * @returns product id by slug
     */
    productGet: (state, action) => {
      if (typeof action === "undefined") return {};
      if (state.products[action] === undefined) return {};

      return state.products[action];
    },
    // basketAdd: (state, action) => {
    //   return { ...state };
    // },
    // basketRemove: (state, action) => {
    //   return { ...state };
    // },
  },
});

export const { productsAdd, productGet } = productsSlice.actions;
export const selectProducts = state => state.products;

export default productsSlice.reducer;
