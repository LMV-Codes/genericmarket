import { Button } from "@chakra-ui/button";
import { Container, Flex, Heading } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { useAppDispatch } from "../app/hooks";
import CustomField from "../components/form/CustomField";
import { login } from "../features/users/userSlice";

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Username or Email too short")
      .max(100, "Username or Email too long")
      .required("This field is required"),
    password: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .max(100, "Password is too long")
      .required("Password is required"),
  });
  const [randomUP, setRandomUP] = useState({ username: "", password: "" });

  const toast = useToast();

  const randomIdNumber = () => {
    return Math.ceil(Math.random() * 5);
  };

  const fetchUserById = async (id: number) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/users/${id}`);
      return response.data;
    } catch (error) {
      toast({
        title: "Error",
        description: "Sorry, we could not complete your request",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  let initialValues = {
    username: "",
    password: "",
  };

  const fetchRandomUser = async () => {
    const randomUser = await fetchUserById(randomIdNumber());
    return { username: randomUser.username, password: randomUser.password };
  };

  return (
    <Container
      maxW="container.sm"
      mt="2em"
      bg="white"
      padding="2em"
      borderRadius="5px"
      boxShadow="0px 3px 5px rgba(0, 0, 0, 0.2)"
    >
      <Heading textAlign="center" textTransform="uppercase">
        Login
      </Heading>
      <Formik
        validationSchema={loginSchema}
        initialValues={initialValues}
        onSubmit={async (values, { setErrors }) => {
          history.push("/");
          dispatch(
            login({
              username: values.username,
              password: values.password,
            })
          );
        }}
      >
        {(props) => (
          <Form>
            <CustomField fieldValue="username" />
            <CustomField fieldValue="password" isPassword />
            <Flex justifyContent="center">
              <Button
                width="7em"
                mt={4}
                bg="brand.200"
                color="white"
                fontWeight="regular"
                _hover={{ bg: "brand.300", color: "brand.400" }}
                _active={{ bg: "brand.300", color: "brand.200" }}
                isLoading={props.isSubmitting}
                type="submit"
              >
                Login
              </Button>
              <Button
                mt={4}
                ml={4}
                bg="brand.200"
                color="white"
                fontWeight="regular"
                _hover={{ bg: "brand.300", color: "brand.400" }}
                _active={{ bg: "brand.300", color: "brand.200" }}
                onClick={async () => {
                  const user = await fetchRandomUser();
                  props.setFieldValue("username", user.username);
                  props.setFieldValue("password", user.password);
                }}
                // onClick={() => fetchRandomUser()}
              >
                Get random username and password
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
