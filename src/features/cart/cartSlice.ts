import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../types";

interface ActionAmount {
  amount: number;
  indexOf: number;
}

interface ProductInCart {
  amount: number;
  product: ProductProps;
}

export interface CartState {
  products: ProductInCart[];
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
    addProduct(cart, action: PayloadAction<ProductInCart>) {
      cart.products.push(action.payload);
      cart.itemAmount++;
    },
    changeAmount(cart, action: PayloadAction<ActionAmount>) {
      cart.products[action.payload.indexOf].amount =
        cart.products[action.payload.indexOf].amount + action.payload.amount;
    },
    showCart(cart, action) {
      cart.showCart = !cart.showCart;
    },
  },
});

const { reducer } = cartSlice;

export const { addProduct, showCart, changeAmount } = cartSlice.actions;

export default reducer;
