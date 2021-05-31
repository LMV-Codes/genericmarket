import { Box, Container, Flex, Heading } from "@chakra-ui/layout";
import { useAppSelector } from "../../app/hooks";
import React from "react";
import { CloseIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { showCheckout } from "../../features/cart/cartSlice";
import { CheckoutForm } from "./CheckoutForm";

export const Checkout: React.FC = () => {
  const formatTotalAmount = (price: number) => {
    return new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const dispatch = useDispatch();

  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  return (
    <Box
      position="absolute"
      zIndex={20}
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
            onClick={() => dispatch(showCheckout(false))}
            marginLeft="auto"
            marginRight="1em"
            color="gray.500"
            _hover={{ color: "black" }}
            cursor="pointer"
          />
        </Flex>
        <Heading size="lg" textAlign="center">
          Your cart total is {formatTotalAmount(totalPrice)}
        </Heading>
        <CheckoutForm />
      </Container>
    </Box>
  );
};
