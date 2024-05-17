import React from "react";
import { Box, Center, Text, Image, IconButton, Spacer } from "@chakra-ui/react";
import { FaLink } from "react-icons/fa";

const UserModel = ({
  check,
  userImg,
  Name,
  followers,
  following,
  Totalrepo,
  loc,
  Bloglink,
  Bio,
}) => {
  return (
    <>
      <Center flexDirection={check ? "row" : "column"} mt={8} boxShadow="inner">
        <Box p={6} ml={8} color="white" boxShadow="inner">
          <Image src={userImg} />
        </Box>

        <Box
          p={6}
          ml={8}
          shadow="lg"
          rounded="lg"
          bg="white"
          boxShadow="inner"
          px="3"
          py="2"
          bgGradient="linear(to-r,gray.400, pink.300,purple.400)"
        >
          <Text
            color="black"
            mt={0}
            fontSize="l"
            fontWeight="semibold"
            lineHeight="short"
          >
            {Bio}
          </Text>

          {Name !== "" && Name !== null && (
            <Text color="black" mt={5}>
              {" "}
              {"Hi 👋, i am " + Name + " !"}
            </Text>
          )}
          <Text color="black" mt={5}>
            👨‍🚀 Followers - {followers}{" "}
          </Text>
          <Text color="black" mt={5}>
            👨‍💻 Following - {following}{" "}
          </Text>
          <Text color="black" mt={5}>
            🎒 Total Repos - {Totalrepo}
          </Text>
          {loc !== "" && (
            <Text color="black" mt={5}>
              {" "}
              {"📍 Location -" + loc}
            </Text>
          )}
          {Bloglink !== "" && (
            <Text mt={5} color="black">
              {" "}
              {"📚 Look on my blogs here- " + Bloglink}
              <IconButton
                ml="15px"
                onClick={() => window.open(Bloglink, "_blank")}
                icon={<FaLink fontSize="10px" />}
              />
            </Text>
          )}
        </Box>
      </Center>
      <Spacer />
      <Spacer />
    </>
  );
};

export default UserModel;
