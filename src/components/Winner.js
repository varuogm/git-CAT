import React from "react";
import { Spacer, Alert, Text, AlertIcon } from "@chakra-ui/react";

const WinnerText = ({
  username,
  friendUsername,
  Totalrepo,
  TotalFriendRepo,
}) => {
  const isWinner = TotalFriendRepo >= Totalrepo;

  return (
    <>
      <Text ml={10} fontSize="lg" fontWeight="bold" color="pink.700">
        {isWinner ? (
          <h1>{`${friendUsername} is the winner with ${TotalFriendRepo} repos`}</h1>
        ) : (
          <h1>{`${username} is the winner with ${Totalrepo} repos`}</h1>
        )}
      </Text>

      <Spacer mt="50px" />

      <Alert status="success">
        <AlertIcon />
        This comparison is only based on Repo count and nothing else . You both
        are gem 💎
      </Alert>
      <Spacer mt="100px" />
    </>
  );
};
export default WinnerText;
