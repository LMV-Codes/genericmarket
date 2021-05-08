import { Button } from "@chakra-ui/button";
import { Icon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../../features/users/userSlice";
import { showCart } from "../../features/cart/cartSlice";

export const LoggedInLinks: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Flex alignItems="center">
      <Button
        variant="outline"
        borderColor="orange"
        color="orange"
        onClick={() => dispatch(logout)}
      >
        Logout
      </Button>
      <IconButton
        marginLeft="1em"
        variant="outline"
        aria-label="shopping-cart"
        _hover={{ bg: "brand.400", color: "brand.200" }}
        icon={<Icon as={FaShoppingCart} />}
        onClick={() => dispatch(showCart(true))}
      />
    </Flex>
  );
};
