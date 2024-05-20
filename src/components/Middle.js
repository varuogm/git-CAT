import React from "react";
import { Box, Flex, IconButton, Tooltip, Text, Spacer } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import CATS from "../Assests/Images/Cats.png";

const Middle = ({ check }) => {
  return (
    <>
      <Flex flexDirection={check ? "row" : "column"}>
        <img
          src={CATS}
          height="50%"
          width={check ? "40%" : "100%"}
          lazyload="off"
          alt="Cats-pic"
        />

        <Box textAlign="center">
          <Box mt={check ? "20%" : "0%"} ml={check ? "15%" : "0%"}>
            <Flex direction="column">
              <Text fontSize="xl" mr={check ? "10%" : "0%"}>
                {" "}
                What a cute cat likes.Maybe some cat-food but im special i want
                your opinion on how much rating you would give this{" "}
              </Text>
              <Text mt="5%">
                Also share and stars⭐ are appreciated !! MEOWW
                <Tooltip label="Star! on github">
                  <a href="https://github.com/varuogm/git-CAT" target="_blank">
                    <IconButton
                      ml={2}
                      mr={1}
                      boxSize="30px"
                      icon={<FaGithub />}
                      isRound="true"
                    ></IconButton>
                  </a>
                </Tooltip>
              </Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
      <Spacer mt="50px" />
    </>
  );
};

export default Middle;
