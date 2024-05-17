import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";

const AccordionComponent = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <Heading
        mt="0"
        mb="5"
        size="2xl"
        fontWeight="extrabold"
        bgClip="text"
        bgGradient="linear(to-r, yellow.500, pink.300, purple.500)"
      >
        FAQ
      </Heading>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Why it's useful
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          It gives you an overall insight of a person's GitHub profile in one
          place
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              How are the points being calculated
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          There are various parameters keeping in mind calculating the most
          accurate result. We are still working on more parameters.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
