import { Button } from "@chakra-ui/button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { useAppDispatch } from "../../app/hooks";

interface ShopLinkProps {
  name: string;
  urls: string[];
  handleDispatch: Function;
}

export const ShopLink: React.FC<ShopLinkProps> = ({ name, urls, handleDispatch }) => {
  const dispatch = useAppDispatch()
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg="brand.200"
        fontWeight="regular"
        textTransform="capitalize"
        size="sm"
        marginTop="0.3em"
        _hover={{ bg: "brand.500", color: "brand.200" }}
        _active={{ bg: "brand.400", color: "brand.200" }}
      >
        {name}
      </MenuButton>
      <MenuList>
        {urls.map((url, i) => (
          <Box key={i}>
            <MenuItem color="brand.200" textTransform="capitalize" onClick={() => dispatch(handleDispatch(url))}>
              {url}
            </MenuItem>
          </Box>
        ))}
      </MenuList>
    </Menu>
  );
};
