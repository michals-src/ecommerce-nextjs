import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Slug : ID w celu znalezienia id pod slug
  products: {},
  //products_slug: {},
  //recommended: {},
  basket: {},
  wishlist: {},
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsUpdate: (state, action) => {
      if (action.payload.length <= 0) return state;
      state.products = { ...state.products, ...action.payload };
    },
    productsGet: (state, action) => {
      return state.products;
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
    basketAdd: (state, action) => {
      if (action.payload.length <= 0) return state;
      state.products = { ...state.products, ...action.payload };
    },
    // basketRemove: (state, action) => {
    //   return { ...state };
    // },
  },
});

export const selectProducts = state => state.products;
export const selectBasket = state => state.basket;
export const selectWishlist = state => state.wishlist;

export const { productsUpdate, productsGet, productGet, basketAdd } =
  productsSlice.actions;

export default productsSlice.reducer;
