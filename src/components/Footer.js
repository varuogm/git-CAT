import React from "react";
import {
  Box,
  Stack,
  Center,
  Image,
  IconButton,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mt="auto"
      py="12"
      px={{ base: "4", md: "8" }}
      color="white"
    >
      <Stack spacing={8}>
        <Center>
          <Image
            alignSelf="flex-center"
            borderRadius="100px"
            align="center"
            justify="center"
            boxSize="90px"
            boxShadow="inner"
            src="https://i.ibb.co/b29dG1G/JEo6-Jh-S1-400x400.jpg"
            alt="gourav image"
          />
        </Center>
        <Stack direction="row" mt="5" align="center" justify="center">
          <ButtonGroup boxShadow="inner">
            <IconButton
              boxShadow="inner"
              onClick={() =>
                window.open("https://twitter.com/Varougm", "_blank")
              }
              icon={<FaTwitter fontSize="30px" />}
            />
            <IconButton
              boxShadow="inner"
              onClick={() =>
                window.open("https://github.com/varuogm", "_blank")
              }
              icon={<FaGithub fontSize="30px" />}
            />
            <IconButton
              boxShadow="inner"
              onClick={() =>
                window.open(
                  "https://in.linkedin.com/in/gourav-majee-724b37188",
                  "_blank"
                )
              }
              icon={<FaLinkedin fontSize="30px" />}
            />
            <IconButton
              boxShadow="inner"
              onClick={() => window.open("https://varuog.xyz/", "_blank")}
              icon={<FaLink fontSize="30px" />}
            />
          </ButtonGroup>
        </Stack>
        <Stack direction="column" alignItems="center" mt="10">
          <Text fontSize="sm">© 2024 Gourav Maje. All Rights Reserved.</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
