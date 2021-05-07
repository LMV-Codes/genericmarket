import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (thunkAPI) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const fetchCategories = createAsyncThunk(
  "products/fetchCategories",
  async (thunkAPI) => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: "idle",
    products: [],
    errors: {},
    categories: [],
    selectedCategory: "all",
  },
  reducers: {
    selectCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.errors = action.error;
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = "done";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.errors = action.error;
    });
  },
});

export const { selectCategory } = productSlice.actions;

const { reducer } = productSlice;

export default reducer;
