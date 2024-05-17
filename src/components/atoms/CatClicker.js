import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

const CatClicker = ({ Name, CAT }) => {
  const toast = useToast();

  const handleImageClick = () => {
    toast({
      title: `heyy ${Name}`,
      description: "Have a great day.",
      duration: 1000,
      isClosable: true,
    });
  };

  return (
    <Box height="10" align="center">
      <span>
        <img onClick={handleImageClick} src={CAT} alt="Cat gif" />
      </span>
      <Text margin="5">You've reached the end 💖 BTW click me 🐾!!</Text>
    </Box>
  );
};

export default CatClicker;
