import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    products: [],
    totalQuantity: 0,
  },
  reducers: {
    addToFav: (state, action) => {
      const product = action.payload;
      const isProductInFav = state.products.find((item) => item.id === product.id);

      if (!isProductInFav) {
        state.products.push(product);
        state.totalQuantity += 1;
      }
    },
    removeFromFav: (state, action) => {
      const product = action.payload;
      state.products = state.products.filter((item) => item.id !== product.id);
        state.totalQuantity -= 1;
    },
  },
});

export const { addToFav, removeFromFav } = favSlice.actions;
export default favSlice.reducer;