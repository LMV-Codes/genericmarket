import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ProductList } from "../components/product/ProductList";
import { fetchProducts } from "../features/products/productSlice";
import { productProps } from "../types";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const products: productProps[] = useAppSelector(
    (state) => state.product.products
  );
  const selectedCategory = useAppSelector(
    (state) => state.product.selectedCategory
  );

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <>
      {products.length !== 0 ? (
        <ProductList products={products} selectedCategory={selectedCategory} />
      ) : (
        <Flex justifyContent="center" width="100vh" marginTop="10em">
          <Spinner justifySelf="center" alignSelf="center" size="xl" />
        </Flex>
      )}
    </>
  );
};
