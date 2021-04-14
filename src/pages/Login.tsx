import { Button } from "@chakra-ui/button";
import { Container } from "@chakra-ui/layout";
import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router";
import * as Yup from "yup";
import CustomField from "../components/form/CustomField";
export const Login: React.FC = () => {
  const history = useHistory();

  const loginSchema = Yup.object().shape({
    usernameOrEmail: Yup.string()
      .min(2, "Username or Email too short")
      .max(100, "Username or Email too long")
      .required("This field is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password is too long")
      .required("Password is required"),
  });
  return (
    <Container maxW="container.sm" mt="2em">
      <Formik
        validationSchema={loginSchema}
        initialValues={{ usernameOrEmail: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          history.push("/");
        }}
      >
        {(props) => (
          <Form>
            <CustomField fieldValue="usernameOrEmail" />
            <CustomField fieldValue="password" isPassword />
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
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
