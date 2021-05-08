import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../types";

interface CartState {
  products: Array<ProductProps>;
  itemAmount: number;
  showCart: boolean;
}

const initialState: CartState = {
  products: [],
  itemAmount: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(cart, action: PayloadAction<ProductProps>) {
      cart.products.push(action.payload);
      cart.itemAmount++;
    },
    showCart(cart, action) {
      cart.showCart = !cart.showCart;
    },
  },
});

const { reducer } = cartSlice;

export const { addProduct, showCart } = cartSlice.actions;

export default reducer;
