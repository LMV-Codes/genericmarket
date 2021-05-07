import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import userReducer from "../features/users/userSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: { product: productReducer, user: userReducer, cart: cartReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
