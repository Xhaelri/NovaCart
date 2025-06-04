import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        state.products = state.products.filter(
          (item) => item.id !== product.id
        );

        state.totalQuantity -= 1;
        state.totalPrice -= product.price;
      }
    },
    increaseQuantity: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += product.price;
      } else {
        state.products.push({ ...product, quantity: 1 });
        state.totalQuantity += 1;
        state.totalPrice += product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= product.price;
        } else {
          state.products = state.products.filter(
            (item) => item.id !== product.id
          );
          state.totalQuantity -= 1;
          state.totalPrice -= product.price;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
