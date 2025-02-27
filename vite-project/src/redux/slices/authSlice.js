import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosinstance";

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/users?email=${user.email}`);
      if (response.data.length == 0) {
        throw new Error("Invalid credentials");
      }
      if (response.data[0].password !== user.password) {
        throw new Error("Invalid credentials");
      }

      return response.data[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRegister = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/users", user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loginLoading: false,
    registerLoading: false,
    loginError: "",
    registerError: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loginLoading = true;
        state.loginError = "";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loginLoading = false;
        state.loginError = action.payload;
      });

    builder
      .addCase(fetchRegister.pending, (state) => {
        state.registerLoading = true;
        state.registerError = "";
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.registerLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.registerLoading = false;
        state.registerError = action.payload;
      });
  },
});

export default authSlice.reducer;
