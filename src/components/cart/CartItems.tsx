import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeFromCart } from "../../features/cart/cartSlice";
import { ProductInCart } from "../../features/cart/cartSlice";

export const CartItems: React.FC = () => {
  const dispatch = useAppDispatch();

  const getIndexOfProduct = (
    products: Array<ProductInCart>,
    product: ProductInCart
  ) => {
    return products.findIndex((p) => p.product.id === product.product.id);
  };

  const toast = useToast();

  const dispatchRemoveItem = (cartItem: ProductInCart) => {
    const index = getIndexOfProduct(cart, cartItem);
    dispatch(removeFromCart(index));
    toast({
      title: "Item removed from cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const formatTotalAmount = (price: number) => {
    return new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const cart = useAppSelector((state) => state.cart.products);
  return (
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
                {formatTotalAmount(cartItem.product.price * cartItem.amount)}
              </Heading>
            </GridItem>
          </Grid>
          <Button
            colorScheme="red"
            onClick={() => dispatchRemoveItem(cartItem)}
          >
            Remove from cart
          </Button>
        </Flex>
      ))}
    </Flex>
  );
};
