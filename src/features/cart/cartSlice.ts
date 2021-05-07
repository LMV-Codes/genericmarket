import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../types";

interface CartState {
  products: Array<ProductProps>;
  itemAmount: number;
}

const initialState: CartState = { products: [], itemAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(cart, action: PayloadAction<ProductProps>) {
      cart.products.push(action.payload);
      cart.itemAmount++;
    },
  },
});

const { reducer } = cartSlice;

export const { addProduct } = cartSlice.actions;

export default reducer;
