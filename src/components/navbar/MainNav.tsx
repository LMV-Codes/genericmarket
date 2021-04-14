import { Flex, Grid, GridItem, Heading } from "@chakra-ui/layout";
import { AuthLinks } from "./AuthLinks";
import SearchBar from "./SearchBar";
import { ShopLink } from "./ShopLink";
const MainNav = () => {
  const categoriesUrls = ["test", "test2", "test3", "test4"];
  const salesUrls = ["testsale", "testsale2", "testsale3", "testsale4"];

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
          <Flex flexDir="column">
            <Heading fontSize="1.5em">Generic</Heading>
            <Heading fontSize="1.5em">Market</Heading>
          </Flex>
        </Flex>
      </GridItem>
      <GridItem>
        <Flex flexDirection="column">
          <SearchBar />
          <Flex justifyContent="space-around">
            <ShopLink name="categories" urls={categoriesUrls} />
            <ShopLink name="sales" urls={salesUrls} />
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
