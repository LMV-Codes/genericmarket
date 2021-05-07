import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "users/login",
  async (
    { username, password }: { username: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: "idle",
    token: "",
    error: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = "done";
      state.token = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = "done";
      state.error = action.error;
    });
  },
});

const { reducer } = usersSlice;

export default reducer;
