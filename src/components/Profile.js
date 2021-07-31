import React, { useState } from "react";
import { Heading, Box, Text, chakra, Image } from "@chakra-ui/react";
import { ButtonGroup, IconButton, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import CAT from '../../src/Kitty.gif';
import CATS from '../../src/Cats.png';

import { FaMoon, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { FiZap, FiSearch } from "react-icons/fi";
import { Button, Flex, Center, Stack, Skeleton, VStack, useColorMode, Spacer, useToast } from "@chakra-ui/react"
import { useMediaQuery } from "@chakra-ui/react";


const Profile = () => {
  let GouravImage = "https://media-exp1.licdn.com/dms/image/C5603AQH_DYNV6F0IWw/profile-displayphoto-shrink_200_200/0/1622171286572?e=1629936000&v=beta&t=NfEqSgeobEWHkZUHm_VSvp5msuNO9rPkSpn_EJE4NZY";

  const [username, setUsername] = useState("");
  const [loc, setLoc] = useState("?");
  const [Bio, setBio] = useState("");
  const [userImg, setuserImg] = useState("https://thumbs.dreamstime.com/b/happy-bear-family-characters-teddy-bear-family-happy-bear-family-characters-teddy-bear-family-vector-123893392.jpg");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [Totalrepo, setTotalrepo] = useState("");
  const [Name, setName] = useState("");

  const [Show, setShow] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const [check] = useMediaQuery("(min-width: 1025px)")
  const toast = useToast()

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
      var TotalRepo = Object.keys(profileJson.repos_url || {}).length;
      //console.log(personSize);
      setTotalrepo(TotalRepo);
      setName(profileJson.name);
    }

    if (username == "") {
      setuserImg("https://thumbs.dreamstime.com/b/happy-bear-family-characters-teddy-bear-family-happy-bear-family-characters-teddy-bear-family-vector-123893392.jpg")
      setBio("I think you didint entered anything in the box ⁉️ ANYWAY");
      setName("HI !! Im  pyara Bear of gourav");
      setFollowers("bear dont have followers");
      setFollowing("bears follows what he love ");
      setTotalrepo("Bears dont know about repo.OK .they know only eating");
    }

  };

  return (
    <>
      <>
        <VStack direction="0" p={4}  >
          <IconButton
            icon={colorMode === 'light' ? <FiZap /> : <FaMoon />}
            isRound='true'
            size='lg'
            alignSelf='flex-end'
            onClick={toggleColorMode}
          />
        </VStack>
      </>

      <Heading mt='0' mb='5' size='2xl'
        fontWeight='extrabold' bgClip='text'
        bgGradient='linear(to-r, pink.500, pink.300, blue.500)' >
        Welcome to Git-CAT
      </Heading>

      <Text
        ml={10} fontSize="m"
        fontWeight="bold" color="cyan.500">
        Tells you about your github stats
      </Text>

      <br />
      <Skeleton startColor="pink.500" endColor="orange.500" height="7px" />

      <div style={{ padding: 20 }}>
        <div className="ui search">
          <InputGroup>
            <InputLeftAddon shadow="lg" px="5" py="5" children="your github @" />
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
            px="3" py="2" bg="blue.400" rounded="md"
            _hover={{ bg: "pink.400" }}
            type="submit"
            pl={5}
            onClick={submitHandler}  >
            lets Find Out
            <IconButton ml={1} w={5} h={7} icon={<FiSearch />} />
          </chakra.button>
          <Spacer />

          {//horizontal card remaining
          }
          {Show === true &&
            /*<Box align="center" w="100%" p="5"  >
              <Image align='left' src={userImg} w="20%" h="20%" />

              <Badge align="center" colorScheme="green">PRO</Badge>
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
                todo stars - 99
              </Text>


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
                  <b>todo data</b> todo another data
                </Text>
              </Flex>
            </Box>*/

            <>
              <Center mt={8}>

                <Box p={6} ml={8} color="white">
                  <Image src={userImg} />
                </Box>

                <Box p={6} ml={8} shadow="lg" rounded="lg" bg="white"
                  px="3" py="2" bgGradient="linear(to-r,gray.400, pink.300,purple.400)" >

                  <Text mt={0} fontSize="l" fontWeight="semibold" lineHeight="short">
                    {Bio}
                  </Text>

                  <Text mt={15}>Name - {Name} </Text>
                  <Text mt={5}>Followers - {followers} </Text>
                  <Text mt={5}>Following  - {following} </Text>
                  <Text mt={5}>Total Repos - {Totalrepo}</Text>

                </Box>
              </Center>
            </>
          }
          <Spacer />
          <Spacer />
          <Flex flexDirection={check ? "row" : "column"} >
            <img src={CATS} height="50%" width={check ? "40%" : "100%"} lazyload="off" />

            <Box textAlign="center">
              <Box mt={check ? "20%" : "0%"} ml={check ? "15%" : "0%"}>
                <Flex direction="column">
                  <Text
                    fontSize="xl"
                    mr={check ? "10%" : "0%"}
                  > What a cute cat likes.Maybe some cat-food but im special i want your opinion on how much rating you would give this  </Text>
                  <Text mt="5%">
                    Also share and stars are appreciated !! MEOWW
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Spacer />
          <Box mt={5}>
            <Box height="10" align="center">
              <span>  <img onClick={() =>
                toast({
                  title: `heyy ${Name} `,
                  description: "Have a great day.",
                  duration: 1000,
                  isClosable: true,
                })
              }
                Show Toast src={CAT} />
              </span>
              <Text margin="5" >
                Youve reached the end 💖 BTW click me 🐾!!
              </Text>
            </Box>
          </Box>

          <Spacer />

          <Box as="footer" role="contentinfo" mt="50px" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>

            <Skeleton mt="70px" mb="20px" startColor="pink.500" endColor="orange.500" height="7px" />


            <Stack>
              <Center>
                <Image alignSelf='flex-center'
                  borderRadius="100px"
                  align="center" justify="center"
                  boxSize="90px"
                  src={GouravImage}
                  alt="gourav image"
                />
              </Center>
              <Stack direction="row" mt="20px" align="center" justify="center">

                <ButtonGroup color="gray.600" >
                  <IconButton href="https://in.linkedin.com/in/gourav-majee-724b37188" label="likedin" icon={<FaLinkedin fontSize="30px" />} />
                  <IconButton href="https://github.com/varuogm" label="github" icon={<FaGithub fontSize="30px" />} />
                  <IconButton href="https://twitter.com/Varougm" label="tooter" icon={<FaTwitter fontSize="30px" />} />

                </ButtonGroup>

              </Stack>
              <Text fontSize="m"
                fontWeight="bold" color="gray.600">
                Made with love by gourav.
              </Text>
            </Stack>
          </Box>


        </div>
      </div>

    </>
  );
};
export default Profile;


