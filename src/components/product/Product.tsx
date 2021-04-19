import { Image } from "@chakra-ui/image";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { productProps } from "../../types";

export const Product: React.FC<productProps> = ({
  image,
  name,
  description,
  categories,
  ean,
  images,
  netPrice,
  price,
  tags,
  upc,
}) => {
  return (
    <Box maxWidth="20em" bg="brand.100" margin="1em">
      <Image src={image} alt={name} />
      <Heading>{name}</Heading>
      <Text>{description}</Text>
    </Box>
  );
};
