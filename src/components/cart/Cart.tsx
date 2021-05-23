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

  const getTotalFromCart = (productArray: Array<ProductInCart>) => {
    let sumTotal = 0;
    productArray.forEach(
      (product) =>
        (sumTotal = sumTotal + product.product.price * product.amount)
    );

    return sumTotal;
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
                    {formatTotalAmount(
                      cartItem.product.price * cartItem.amount
                    )}
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
          >
            Go to Checkout
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
