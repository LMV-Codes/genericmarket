import { Box, Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Product } from "../components/product/Product";
import { fetchProducts } from "../features/products/productSlice";
import { productProps } from "../types";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const products: productProps[] = useAppSelector(
    (state) => state.product.products
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);
  console.log(products);
  return (
    <Flex flexWrap="wrap">
      {products.length !== 0 ? (
        products.map((product, index) => (
          <Box minHeight="10em" key={index}>
            <Product
              id={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              category={product.category}
              price={product.price}
            />
          </Box>
        ))
      ) : (
        <Spinner justifySelf="center" alignSelf="center" size="xl" />
      )}
    </Flex>
  );
};
