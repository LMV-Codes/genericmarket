import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useAppSelector } from "../../app/hooks";
import { ProductProps } from "../../types";
import { useToast } from "@chakra-ui/react";

export const Product: React.FC<ProductProps> = ({
  title,
  description,
  image,
  price,
  category,
}) => {
  const { isOpen, onToggle } = useDisclosure();
  const isLogged = useAppSelector((state) => state.user.isLogged);
  const toast = useToast();

  const handleAddToCart = (isLogged: boolean) => {
    if (isLogged === false) {
      return toast({
        title: "Not logged in",
        description: "You can't add items to cart if you're not logged in",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="20em" bg="brand.150" margin="1em">
      <Flex justifyContent="center" alignItems="center" bg="white">
        <Image src={image} alt={title} boxSize="20em" objectFit="contain" />
      </Flex>
      <Flex justifyContent="space-between" margin="0.5em" alignItems="center">
        <Heading as="h5" size="md">
          {title}
        </Heading>
        <Heading as="h4" size="lg">
          {new Intl.NumberFormat("en-EN", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </Heading>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex justifyContent="center" flexDirection="column">
          <Text margin="1em">{description}</Text>
          <Button
            variant="outline"
            borderColor="brand.300"
            fontWeight="regular"
            color="brand.300"
            rightIcon={<FaShoppingCart />}
            margin="0.5em"
            _hover={{ bg: "brand.300", color: "brand.400" }}
            onClick={() => handleAddToCart(isLogged)}
          >
            Add to cart
          </Button>
        </Flex>
      </Collapse>
      <Flex justifyContent="center">
        <Button
          isFullWidth
          size="xs"
          onClick={onToggle}
          color="brand.300"
          variant="outline"
          borderRadius="0"
          borderColor="brand.150"
          _hover={{ bg: "brand.500" }}
        >
          {isOpen ? (
            <ChevronUpIcon fontSize="2em" />
          ) : (
            <ChevronDownIcon fontSize="2em" />
          )}
        </Button>
      </Flex>
    </Box>
  );
};
