import { Button } from "@chakra-ui/button";
import { ChevronDownIcon, Icon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

interface userData {
  username: string;
  userId: string;
}

export const LogedInLinks: React.FC<userData> = ({ username, userId }) => {
  return (
    <Flex alignItems="center">
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="brand.200"
          fontWeight="regular"
          textTransform="capitalize"
          size="sm"
          _hover={{ bg: "brand.500", color: "brand.200" }}
          _active={{ bg: "brand.400", color: "brand.200" }}
        >
          {username}
        </MenuButton>
        <MenuList>
          <MenuItem color="brand.200" textTransform="capitalize">
            Profile
          </MenuItem>
          <MenuItem color="brand.200" textTransform="capitalize"></MenuItem>
          <MenuItem color="brand.200" textTransform="capitalize">
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
      <IconButton
        marginLeft="1em"
        variant="outline"
        aria-label="shopping-cart"
        _hover={{ bg: "brand.400", color: "brand.200" }}
        icon={<Icon as={FaShoppingCart} />}
      />
    </Flex>
  );
};
