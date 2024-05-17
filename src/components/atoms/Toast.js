import React from "react";
import { useToast } from "@chakra-ui/react";

const Toast = ({ toastMessage, title }) => {
  const toast = useToast();

  const showToast = () => {
    toast({
      title,
      description: toastMessage,
      duration: 1000,
      isClosable: true,
    });
  };

  return (
    <span onClick={showToast}>
      <img src={CAT} alt="Cat gif" />
      <Text margin="5"> You've reached the end BTW click me !!</Text>
    </span>
  );
};

export default Toast;
