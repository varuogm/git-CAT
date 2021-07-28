import React, { useState } from "react";
import { Heading, Box, Flex, Badge, Text } from "@chakra-ui/react";
import { chakra, Button, ButtonGroup, Image } from "@chakra-ui/react"
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import CAT from '../../src/Kitty.gif';

const Profile = () => {

  const [username, setUsername] = useState("");
  const [loc, setLoc] = useState("?");
  const [Bio, setBio] = useState("");
  const [userImg, setuserImg] = useState("https://thumbs.dreamstime.com/b/happy-bear-family-characters-teddy-bear-family-happy-bear-family-characters-teddy-bear-family-vector-123893392.jpg");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [Totalrepo, setTotalrepo] = useState("");
  const [Name, setName] = useState("");

  const [Show, setShow] = useState(false);


  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    setShow(true);

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    //console.log(profile);

    if (profileJson) {
      setLoc(profileJson.location);
      //setComapany(profileJson.company);
      setBio(profileJson.bio);
      setuserImg(profileJson.avatar_url);
      setFollowers(profileJson.followers);
      setFollowing(profileJson.following);
      var TotalRepo = Object.keys(profileJson.repos_url).length;
      //console.log(personSize);
      setTotalrepo(TotalRepo);
      setName(profileJson.name);

    }
  };

  return (
    <>
      <Heading mt='10' mb='10' size='2xl'
        fontWeight='extrabold' bgClip='text'
        bgGradient='linear(to-r, pink.500, pink.300, blue.500)'>
        Info about Github user
      </Heading>

      <Text
        ml={10} fontSize="m"
        fontWeight="bold" color="cyan.500">
        Tells you about your github stats
      </Text>

      <br />
      <hr />

      <div style={{ padding: 20 }}>
        <div className="ui search">

          <InputGroup>
            <InputLeftAddon shadow="lg" px="3" py="2" children="your github @" />
            <Input className="prompt"
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler} variant="filled"
              placeholder="Enter your username here" />
          </InputGroup>

          <br />

          <chakra.button
            shadow="lg" rounded="lg" bg="white"
            px="3" py="2" bg="blue.200" rounded="md"
            _hover={{ bg: "pink.300" }}
            type="submit"

            onClick={submitHandler}>
            Click me
          </chakra.button>

          {Show == true &&
            <Box p="5" maxW="320px" >
              <Image src={userImg} />
              <Flex mt={50}>
                <Badge colorScheme="green">PRO</Badge>
                <Text
                  ml={5}
                  textTransform=""
                  fontSize="sm"
                  fontWeight="bold"
                  color="pink.800">
                  {loc}
                </Text>
                <Text
                  ml={13}
                  fontSize="m"
                  fontWeight="bold"
                  color="yellow.500" >
                  stars - 99
                </Text>
              </Flex>

              <Text mt={5} fontSize="xl" fontWeight="semibold" lineHeight="short">
                {Bio}
              </Text>
              <Text mt={5}>Name - {Name} </Text>
              <Text mt={5}>Followers - {followers} </Text>
              <Text mt={5}>follwing  - {following} </Text>
              <Text mt={5}>total repos - {Totalrepo}</Text>
              <Flex mt={5} align="center">
                <Box color="orange.400" />
                <Text ml={1} fontSize="sm">
                  <b>4.84</b> (190)
                </Text>
              </Flex>
            </Box>
          }
          <Box mt={5}>

            <Box height="10" align="center">
              <span>  <img src={CAT} />
              </span>
              <Text margin="5">
                Made with  ❤️ and 🐱
              </Text>
            </Box>
          </Box>
        </div>
      </div>

    </>
  );
};
export default Profile;


