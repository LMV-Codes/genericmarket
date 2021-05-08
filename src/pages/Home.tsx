import { Flex } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Cart } from "../components/cart/Cart";
import { ProductList } from "../components/product/ProductList";
import { fetchProducts } from "../features/products/productSlice";
import { ProductProps } from "../types";

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const products: ProductProps[] = useAppSelector(
    (state) => state.product.products
  );
  const selectedCategory = useAppSelector(
    (state) => state.product.selectedCategory
  );

  const showCart = useAppSelector((state) => state.cart.showCart);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <>
      {showCart && <Cart />}
      {products.length !== 0 ? (
        <ProductList products={products} selectedCategory={selectedCategory} />
      ) : (
        <Flex justifyContent="center" width="100%" marginTop="10em">
          <Spinner
            justifySelf="center"
            alignSelf="center"
            size="xl"
            color="brand.200"
            emptyColor="brand.400"
          />
        </Flex>
      )}
    </>
  );
};
