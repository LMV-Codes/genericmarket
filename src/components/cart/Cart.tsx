import { Button } from "@chakra-ui/button";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { showCart, showCheckout } from "../../features/cart/cartSlice";
import { CartItems } from "./CartItems";
import { CartTotalAmount } from "./CartTotalAmount";

export const Cart: React.FC = () => {
  const dispatch = useAppDispatch();

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
        <CartTotalAmount />
        <Flex justifyContent="center" marginTop="2em">
          <Button
            variant="outline"
            colorScheme="green"
            rightIcon={<CheckIcon />}
            marginBottom="2em"
            onClick={() => dispatch(showCheckout(true))}
          >
            Go to Checkout
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
