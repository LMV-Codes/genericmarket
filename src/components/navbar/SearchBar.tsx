import { IconButton } from "@chakra-ui/button";
import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";

const SearchBar = () => {
  return (
    <Stack spacing={4}>
      <InputGroup w="90%" size="sm" alignSelf="center">
        <Input placeholder="Búsqueda" bg="white" color="gray.700" />
        <InputRightElement>
          <IconButton
            size="xs"
            aria-label="search"
            bg="brand.500"
            _hover={{ bg: "brand.400" }}
            icon={<SearchIcon color="brand.200" />}
          />
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};

export default SearchBar;
