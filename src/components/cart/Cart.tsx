import { Button } from "@chakra-ui/button";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
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
import { useToast } from "@chakra-ui/toast";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeFromCart } from "../../features/cart/cartSlice";
import { ProductInCart, showCart } from "../../features/cart/cartSlice";
import { CartItems } from "./CartItems";

export const Cart: React.FC = () => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart.products);

  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  const toast = useToast();

  const getIndexOfProduct = (
    products: Array<ProductInCart>,
    product: ProductInCart
  ) => {
    return products.findIndex((p) => p.product.id === product.product.id);
  };

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

  return (
    <Box
      position="absolute"
      zIndex={10}
      bg="rgba(150,150,150,0.6)"
      height="100%"
      width="100%"
      top={0}
      left={0}
    >
      <Container
        maxWidth="container.xl"
        bg="brand.100"
        minHeight="100vh"
        marginTop="5em"
      >
        <Flex>
          <CloseIcon
            marginTop="1em"
            onClick={() => dispatch(showCart(false))}
            marginLeft="auto"
            marginRight="1em"
            color="gray.500"
            _hover={{ color: "black" }}
            cursor="pointer"
          />
        </Flex>
        <Heading textAlign="center">Your Cart</Heading>
        <CartItems />
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
        <Flex justifyContent="center" marginTop="2em">
          <Button
            variant="outline"
            colorScheme="green"
            rightIcon={<CheckIcon />}
            marginBottom="2em"
          >
            Go to Checkout
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
