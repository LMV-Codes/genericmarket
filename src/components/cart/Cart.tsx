import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { useAppSelector } from "../../app/hooks";

export const Cart: React.FC = () => {
  const products = useAppSelector((state) => state.cart.products);

  return (
    <Box position="absolute" zIndex={10} bg="gray" height="100%">
      <Container maxWidth="container.xl">
        <Flex flexWrap="wrap" justifyContent="center">
          {products.map((product, index) => (
            <Box maxWidth="20em" bg="brand.150" margin="1em" key={index}>
              <Flex justifyContent="center" alignItems="center" bg="white">
                <Image
                  src={product.image}
                  alt={product.title}
                  boxSize="20em"
                  objectFit="contain"
                />
              </Flex>
              <Flex
                justifyContent="space-between"
                margin="0.5em"
                alignItems="center"
              >
                <Heading as="h4" size="md">
                  {product.title}
                </Heading>
                <Heading as="h4" size="md">
                  {new Intl.NumberFormat("en-EN", {
                    style: "currency",
                    currency: "USD",
                  }).format(product.price)}
                </Heading>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};
