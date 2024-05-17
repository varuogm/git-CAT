import React from "react";
import {
  VStack,
  IconButton,
  Heading,
  Text,
  Skeleton,
  useColorMode,
} from "@chakra-ui/react";

import { FaMoon } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import WelcomeHeaderComponent from "./atoms/WelcomeHeader";

const HeaderComponent = ({ toggleColorMode, colorMode }) => {
  return (
    <>
      <VStack direction="0" p={4}>
        <IconButton
          icon={colorMode === "light" ? <FiZap /> : <FaMoon />}
          isRound="true"
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
          boxShadow="inner"
          p="6"
        />

        <Heading mt="0" mb="5" size="2xl" fontWeight="extrabold" bgClip="text">
          Welcome to Git-CAT
          <br />
          <Text ml={10} fontSize="m" fontWeight="bold" color="cyan.500">
            Tells you about your github stats
          </Text>
        </Heading>

        <br />
        <Skeleton startColor="pink.500" endColor="orange.500" height="7px" />
      </VStack>
      <WelcomeHeaderComponent />
    </>
  );
};

export default HeaderComponent;
