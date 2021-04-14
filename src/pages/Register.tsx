import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import CustomField from "../components/form/CustomField";
export const Register: React.FC = () => {
  const history = useHistory();
  const initialValues = {
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    age: "",
  };

  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .min(2, "Email too short")
      .max(100, "Email too long")
      .email()
      .required("This field is required"),
    firstName: Yup.string()
      .min(2, "Name too short")
      .max(100, "Name too long")
      .required("This field is required"),
    lastName: Yup.string()
      .min(2, "Name too short")
      .max(100, "Name too long")
      .required("This field is required"),
    age: Yup.number().min(13).max(150).required("This field is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password is too long")
      .required("Password is required"),
  });
  return (
    <Container maxW="container.sm" mt="2em">
      <Formik
        validationSchema={registerSchema}
        initialValues={initialValues}
        onSubmit={async (values, { setErrors }) => {
          history.push("/");
        }}
      >
        {(props) => (
          <Form>
            <CustomField fieldValue="email" />
            <CustomField fieldValue="username" />
            <CustomField fieldValue="firstName" />
            <CustomField fieldValue="lastName" />
            <CustomField fieldValue="password" isPassword />
            <CustomField fieldValue="age" />
            <Button
              mt={4}
              bg="brand.200"
              color="white"
              fontWeight="regular"
              _hover={{ bg: "brand.300", color: "brand.400" }}
              _active={{ bg: "brand.300", color: "brand.200" }}
              isLoading={props.isSubmitting}
              type="submit"
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
