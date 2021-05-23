import { Flex } from "@chakra-ui/layout";
import { useAppSelector } from "../../app/hooks";
import React from "react";

export const Checkout: React.FC = () => {
  const products = useAppSelector((state) => state.cart.products);
  return <Flex>Checkout</Flex>;
};
