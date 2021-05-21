import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../types";

interface SearchState {
  products: Array<ProductProps>;
}

const initialState: SearchState = {
  products: [],
};

const cartSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
});

const { reducer } = cartSlice;

export const {} = cartSlice.actions;

export default reducer;
