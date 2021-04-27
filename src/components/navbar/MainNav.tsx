import { Flex, Grid, GridItem, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import { AuthLinks } from "./AuthLinks";
import SearchBar from "./SearchBar";
import { ShopLink } from "./ShopLink";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchCategories, selectCategory } from "../../features/products/productSlice";
import { useEffect } from "react";
const MainNav = () => {
  const dispatch = useAppDispatch();

  const categories = useAppSelector((state) => state.product.categories);
  console.log(categories);
  const salesUrls = ["testsale", "testsale2", "testsale3", "testsale4"];

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, []);

  

  return (
    <Grid
      templateColumns="1fr 3fr 1fr"
      bg="brand.200"
      color="white"
      h="6em"
      alignItems="center"
    >
      <GridItem>
        <Flex justifyContent="center">
          <Link to="/">
            <Flex flexDir="column">
              <Heading fontSize="1.5em">Generic</Heading>
              <Heading fontSize="1.5em">Market</Heading>
            </Flex>
          </Link>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex flexDirection="column">
          <SearchBar />
          <Flex justifyContent="space-around">
            <ShopLink name="categories" urls={categories} handleDispatch={selectCategory}/>
            {/* <ShopLink name="sales" urls={salesUrls} /> */}
          </Flex>
        </Flex>
      </GridItem>
      <GridItem>
        <AuthLinks loginUrl="/login" registerUrl="/register" />
      </GridItem>
    </Grid>
  );
};

export default MainNav;
