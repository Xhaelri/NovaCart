import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosinstance";
//async params for handling rejected promises
const fetchAllProducts = createAsyncThunk("products/getAll", async (_, thunkAPI) => {
  const res = await axiosInstance.get("/products");
  return res.data;
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export { fetchAllProducts };
export default productsSlice.reducer;
