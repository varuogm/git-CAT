import React from "react";
import {
  Box,
  Flex,
  Input,
  Center,
  Spacer,
  Text,
  chakra,
  Image,
  Heading,
  IconButton,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

const Compare = ({
  check,
  Name,
  friendUsername,
  onFriendChangeHandler,
  submitfriendHandler,
  userImg,
  frienduserImg,
}) => {
  return (
    <>
      <Heading
        mt="0"
        mb="5"
        size="2xl"
        fontWeight="extrabold"
        bgClip="text"
        bgGradient="linear(to-r, yellow.500, green.300, cyan.500)"
      >
        Compare friends stats
      </Heading>
      <Spacer mt="30px" />
      <Text ml={10} fontSize="m" fontWeight="bold" color="cyan.500">
        A Mock compare with your friend stats
      </Text>
      <Spacer mt="50px" />
      <Flex>
        <InputGroup
          flexDirection={check ? "row" : "column"}
          mt="25px"
          size="lg"
        >
          <InputLeftAddon pr={20} children={Name} />
          <Heading
            fontWeight="bold"
            bgClip="text"
            size="lg"
            ml="5%"
            mr="5%"
            bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
          >
            {" "}
            VS
          </Heading>
          <Input
            className="prompt"
            boxShadow="inner"
            type="text"
            value={friendUsername}
            onChange={onFriendChangeHandler}
            variant="filled"
            placeholder="Enter your fridn name here"
          />
        </InputGroup>
      </Flex>
      <chakra.button
        shadow="lg"
        rounded="lg"
        px="3"
        py="2"
        bg="red.400"
        _hover={{ bg: "green.400" }}
        type="submit"
        mt={10}
        pl={5}
        boxShadow="inner"
        onClick={submitfriendHandler}
      >
        Compare
        <IconButton ml={1} w={5} h={7} icon={<FiSearch />} />
      </chakra.button>
      <Spacer mt="50px" />

      <Center>
        <Flex flexDirection={check ? "row" : "column"}>
          <Box
            p="5"
            background="repeating-radial-gradient(
    circle,gray,
    purple 10px,
     #4b026f 10px, 
    #4b026f 20px)"
          >
            <Image boxSize="350px" objectFit="cover" src={userImg} />
          </Box>
          <Heading
            fontWeight="bold"
            bgClip="text"
            size="lg"
            ml="5%"
            mr="5%"
            bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
            align="center"
          >
            {" "}
            VS
          </Heading>

          <Box
            p="5"
            bg="yellow.400"
            background="repeating-radial-gradient(
    circle,gray,
    purple 10px,
     #4b026f 10px, 
    #4b026f 20px)"
          >
            <Image boxSize="350px" objectFit="cover" src={frienduserImg} />
          </Box>
        </Flex>
      </Center>
      <Spacer mt="50px" />
      <Spacer mt="50px" />
    </>
  );
};
export default Compare;
