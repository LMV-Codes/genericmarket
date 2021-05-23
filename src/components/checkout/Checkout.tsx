import { Flex, Heading } from "@chakra-ui/layout";
import { useAppSelector } from "../../app/hooks";
import React from "react";

export const Checkout: React.FC = () => {
  const formatTotalAmount = (price: number) => {
    return new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <Flex>
      <Heading size="lg">
        Your total amounts to {formatTotalAmount(totalPrice)}
      </Heading>
    </Flex>
  );
};
