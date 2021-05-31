import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../types";

interface ActionAmount {
  amount: number;
  indexOf: number;
}

export interface ProductInCart {
  amount: number;
  product: ProductProps;
}

export interface CartState {
  products: ProductInCart[];
  itemAmount: number;
  showCart: boolean;
  totalPrice: number;
  showCheckout: boolean;
}

const initialState: CartState = {
  products: [],
  itemAmount: 0,
  totalPrice: 0,
  showCart: false,
  showCheckout: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(cart, action: PayloadAction<ProductInCart>) {
      cart.products.push(action.payload);
      cart.itemAmount = cart.itemAmount + action.payload.amount;
      cart.totalPrice =
        cart.totalPrice + action.payload.product.price * action.payload.amount;
    },
    changeAmount(cart, action: PayloadAction<ActionAmount>) {
      cart.products[action.payload.indexOf].amount =
        +cart.products[action.payload.indexOf].amount + +action.payload.amount;
    },
    showCart(cart, action) {
      cart.showCart = action.payload;
    },
    removeFromCart(cart, action) {
      cart.products.splice(action.payload, 1);
    },
    showCheckout(cart, action) {
      cart.showCheckout = action.payload;
    },
  },
});

const { reducer } = cartSlice;

export const {
  addProduct,
  showCart,
  changeAmount,
  removeFromCart,
  showCheckout,
} = cartSlice.actions;

export default reducer;
