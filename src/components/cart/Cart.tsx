import { Image } from "@chakra-ui/image";
import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import { useAppSelector } from "../../app/hooks";

export const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.products);
  return (
    <Box
      position="absolute"
      zIndex={10}
      bg="rgba(150,150,150,0.6)"
      height="100%"
      width="100%"
    >
      <Container maxWidth="container.xl" bg="brand.100" minHeight="100vh">
        <Heading textAlign="center">Your Cart</Heading>
        <Flex flexWrap="wrap" justifyContent="center">
          {cart.map((cartItem, index) => (
            <Flex
              maxWidth="20em"
              bg="brand.150"
              margin="1em"
              key={index}
              flexDirection="column"
              borderRadius="5px"
            >
              <Flex justifyContent="center" alignItems="center" bg="white">
                <Image
                  src={cartItem.product.image}
                  alt={cartItem.product.title}
                  boxSize="15em"
                  objectFit="contain"
                />
              </Flex>
              <Grid
                templateRows="1fr 1fr 1fr"
                templateColumns="7fr 1fr 2fr"
                columnGap={3}
                rowGap={0}
                alignItems="center"
                padding="0.5em"
              >
                <GridItem height="1em">
                  <Text fontSize="xs" textAlign="center">
                    Item
                  </Text>
                </GridItem>
                <GridItem height="1em">
                  <Text fontSize="xs" textAlign="center">
                    Amount
                  </Text>
                </GridItem>
                <GridItem height="1em">
                  <Text fontSize="xs" textAlign="center">
                    Total
                  </Text>
                </GridItem>
                <GridItem height="2em">
                  <Heading as="h4" size="sm" textAlign="center">
                    {cartItem.product.title}
                  </Heading>
                </GridItem>
                <GridItem>
                  <Heading as="h4" size="md" textAlign="center">
                    {cartItem.amount}
                  </Heading>
                </GridItem>
                <GridItem>
                  <Heading as="h4" size="md" textAlign="center">
                    {new Intl.NumberFormat("en-EN", {
                      style: "currency",
                      currency: "USD",
                    }).format(cartItem.product.price * cartItem.amount)}
                  </Heading>
                </GridItem>
              </Grid>
            </Flex>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};