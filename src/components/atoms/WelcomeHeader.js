import { Skeleton, Heading, Text } from "@chakra-ui/react";

const WelcomeHeaderComponent = () => {
  return (
    <>
      <Heading
        mt="0"
        mb="5"
        size="2xl"
        fontWeight="extrabold"
        bgClip="text"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
      >
        Welcome to Git-CAT
      </Heading>

      <Text ml={10} fontSize="m" fontWeight="bold" color="cyan.500">
        Tells you about your github stats
      </Text>

      <br />
      <Skeleton startColor="pink.500" endColor="orange.500" height="7px" />
    </>
  );
};

export default WelcomeHeaderComponent;
