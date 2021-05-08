import { Container, Flex } from "@chakra-ui/layout";
import React from "react";
import { useAppSelector } from "../../app/hooks";

export const Cart: React.FC = () => {
  const products = useAppSelector((state) => state.cart.products);

  return (
    <Container>
      <Flex flexWrap="wrap" justifyContent="center">
        {products.map((product, index) => (
          <Flex>{product.price}</Flex>
        ))}
      </Flex>
    </Container>
  );
};
