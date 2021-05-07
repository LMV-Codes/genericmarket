import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { ProductProps } from "../../types";
import { Product } from "./Product";

interface ProductListProps {
  products: ProductProps[];
  selectedCategory: string;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  selectedCategory,
}) => {
  const productsInCategory = (
    productList: ProductProps[],
    category: string
  ) => {
    const productsFromCategory = productList.filter(
      (product) => product.category === category
    );
    return productsFromCategory;
  };
  const filteredProducts = productsInCategory(products, selectedCategory);
  return (
    <Flex flexWrap="wrap">
      {filteredProducts.length !== 0
        ? filteredProducts.map((product, index) => (
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
        : products.map((product, index) => (
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
          ))}
    </Flex>
  );
};
