import { Heading } from "@chakra-ui/layout";
import React from "react";
import { useAppSelector } from "../../app/hooks";

export const CartTotalAmount: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.products);

  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  const formatTotalAmount = (price: number) => {
    return new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };
  return (
    <>
      {" "}
      {cart.length === 0 ? (
        <Heading textAlign="center" marginTop="3em">
          No Items in Cart
        </Heading>
      ) : (
        <Heading textAlign="center" marginTop="2em">
          Total:
          {formatTotalAmount(totalPrice)}
        </Heading>
      )}
    </>
  );
};
