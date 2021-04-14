import { Flex, Text } from "@chakra-ui/layout";
import { NavLink } from "react-router-dom";
import React from "react";
interface AuthLinksProps {
  loginUrl: string;
  registerUrl: string;
}

export const AuthLinks: React.FC<AuthLinksProps> = ({
  loginUrl,
  registerUrl,
}) => {
  return (
    <Flex justifyContent="space-around">
      <NavLink to={loginUrl}>
        <Text marginRight="1em" fontSize=".9em" _hover={{ color: "brand.400" }}>
          Login
        </Text>
      </NavLink>
      <NavLink to={registerUrl}>
        <Text marginRight="1em" fontSize=".9em" _hover={{ color: "brand.400" }}>
          Register
        </Text>
      </NavLink>
    </Flex>
  );
};
