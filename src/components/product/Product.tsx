import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ProductProps } from "../../types";
import {
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useToast,
} from "@chakra-ui/react";
import { addProduct } from "../../features/cart/cartSlice";
import { Form, Formik } from "formik";

export const Product: React.FC<ProductProps> = ({
  id,
  title,
  description,
  image,
  price,
  category,
}) => {
  const [showAddCart, setShowAddCart] = useState(false);

  const { isOpen, onToggle } = useDisclosure();

  const isLogged = useAppSelector((state) => state.user.isLogged);

  const toast = useToast();

  const dispatch = useAppDispatch();

  const product = { id, title, description, image, price, category };

  const addToCart = (amount: number) => {
    dispatch(addProduct({ product: product, amount: amount }));
    toast({
      title: "Item added to cart",
      status: "info",
      duration: 1000,
      isClosable: true,
    });
  };

  const checkLogin = (isLogged: boolean) => {
    if (isLogged === false) {
      return toast({
        title: "Not logged in",
        description: "You can't add items to cart if you're not logged in",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else return true;
  };

  const handleAddToCart = (isLogged: boolean, amount: number) => {
    if (checkLogin(isLogged)) {
      addToCart(amount);
    } else {
      toast({
        title: "Error",
        description: "Sorry, something went wrong",
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
          <Formik
            initialValues={{ amount: 1 }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleAddToCart(isLogged, values.amount);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => (
              <Form>
                <Flex justifyContent="center" alignItems="center">
                  <>
                    <NumberInput
                      id="amount"
                      type="number"
                      name="amount"
                      value={values.amount}
                      onChange={(val) => setFieldValue("amount", val)}
                      defaultValue={1}
                      min={1}
                      max={50}
                      width="4.5em"
                      borderColor="brand.200"
                      color="brand.200"
                    >
                      <NumberInputField borderRightRadius="0" borderRight="0" />
                      <NumberInputStepper borderColor="brand.200">
                        <NumberIncrementStepper />
                        <NumberDecrementStepper borderColor="brand.200" />
                      </NumberInputStepper>
                    </NumberInput>
                    <Button
                      variant="outline"
                      borderColor="brand.300"
                      fontWeight="regular"
                      color="brand.300"
                      rightIcon={<FaShoppingCart />}
                      _hover={{ bg: "brand.300", color: "brand.400" }}
                      type="submit"
                      borderLeftRadius="0"
                    >
                      Add to cart
                    </Button>
                  </>
                </Flex>
              </Form>
            )}
          </Formik>
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
