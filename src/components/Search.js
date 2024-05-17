import React from "react";
import {
  Spacer,
  chakra,
  IconButton,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";

const SearchComponent = () => {
  return (
    <>
      <InputGroup>
        <InputLeftAddon shadow="lg" px="5" py="5" children="your github @" />
        <Input
          className="prompt"
          boxShadow="inner"
          type="text"
          //   value={username}
          //   onChange={onChangeHandler}
          variant="filled"
          placeholder="Enter your username here"
        />
      </InputGroup>
      <br />
      <chakra.button
        shadow="lg"
        rounded="lg"
        px="3"
        py="2"
        bg="blue.400"
        _hover={{ bg: "pink.400" }}
        type="submit"
        pl={5}
        boxShadow="inner"
        // onClick={submitHandler}
      >
        lets Find Out
        <IconButton ml={1} w={5} h={7} icon={<FiSearch />} />
      </chakra.button>
      <Spacer />
    </>
  );
};

export default SearchComponent;
