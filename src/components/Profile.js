import React, { useState } from "react";
import { Heading, Box, Text, chakra, Image } from "@chakra-ui/react";
import { ButtonGroup, IconButton, Input, InputGroup, InputRightAddon, InputLeftAddon } from "@chakra-ui/react"

import { FaMoon, FaLinkedin, FaGithub, FaTwitter, FaLink } from 'react-icons/fa';
import { FiZap, FiSearch } from "react-icons/fi";
import { Flex, Center, Stack, Skeleton, VStack, useColorMode, Spacer, useToast } from "@chakra-ui/react"
import { useMediaQuery, Tooltip } from "@chakra-ui/react";
import { Alert, AlertIcon, } from "@chakra-ui/react";
import CAT from '../../src/Kitty.gif';
import CATS from '../../src/Cats.png';

const Profile = () => {
  <a href="https://ibb.co/8dZ8QMQ"><img src="https://i.ibb.co/8dZ8QMQ/JEo6-Jh-S1-400x400.jpg" alt="JEo6-Jh-S1-400x400" border="0"></a>
  let GouravImage = "https://i.ibb.co/b29dG1G/JEo6-Jh-S1-400x400.jpg";

  const [username, setUsername] = useState("");
  const [loc, setLoc] = useState("?");
  const [Bloglink, setBloglink] = useState("?");

  const [Bio, setBio] = useState("");
  const [userImg, setuserImg] = useState("https://thumbs.dreamstime.com/b/happy-bear-family-characters-teddy-bear-family-happy-bear-family-characters-teddy-bear-family-vector-123893392.jpg");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [Totalrepo, setTotalrepo] = useState("");
  const [Name, setName] = useState("");

  const [show, setShow] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const [check] = useMediaQuery("(min-width: 1025px)")
  const toast = useToast()

  const [friendUsername, setFriendUsername] = useState("");
  const [frienduserImg, setFrienduserImg] = useState("https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2MjkxNzg1NDQwNTY4NTEw/cats-with-down-syndrome-reasons-why-your-cat-cant-have-down-syndrome.jpg");


  const [TotalFriendRepo, setfriendTotalrepo] = useState("");



  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const onFriendChangeHandler = e => {
    setFriendUsername(e.target.value);
  };

  const submitfriendHandler = async e => {
    const Friendprofile = await fetch(`https://api.github.com/users/${friendUsername}`);
    const friendProfileJson = await Friendprofile.json();

    if (friendProfileJson)
      setFriendUsername(friendProfileJson.name);
    setFrienduserImg(friendProfileJson.avatar_url);

    var TotalFriendRepo = Object.keys(friendProfileJson.repos_url || {}).length;

    setfriendTotalrepo(TotalFriendRepo);

  }

  const submitHandler = async e => {
    setShow(true);

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    //console.log(profile);
    /*
        const trendings = await fetch(`https://trendings.herokuapp.com/repo`);
        const TrendingJson = await trendings.json();
    
        console.log(TrendingJson.items.repo_link)
    */
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
      setBloglink(profileJson.blog);

    }

    if (username === "") {
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
            boxShadow="inner" p="6"
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

      <div style={{ padding: 40 }}>
        <div className="ui search">
          <InputGroup>
            <InputLeftAddon shadow="lg" px="5" py="5" children="your github @" />
            <Input className="prompt"
              boxShadow="inner"

              type="text"
              value={username}

              onChange={onChangeHandler} variant="filled"
              placeholder="Enter your username here" />
          </InputGroup>

          <br />

          <chakra.button
            shadow="lg" rounded="lg"
            px="3" py="2" bg="blue.400"
            _hover={{ bg: "pink.400" }}
            type="submit"
            pl={5}
            boxShadow="inner"
            onClick={submitHandler}  >
            lets Find Out
            <IconButton ml={1} w={5} h={7} icon={<FiSearch />} />
          </chakra.button>
          <Spacer />

          {//horizontal card remaining
          }
          {show === true &&
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
              <Center flexDirection={check ? "row" : "column"} mt={8} boxShadow="inner">

                <Box p={6} ml={8} color="white" boxShadow="inner">
                  <Image src={userImg} />
                </Box>

                <Box p={6} ml={8} shadow="lg" rounded="lg" bg="white" boxShadow="inner"
                  px="3" py="2" bgGradient="linear(to-r,gray.400, pink.300,purple.400)" >

                  <Text mt={0} fontSize="l" fontWeight="semibold" lineHeight="short">
                    {Bio}
                  </Text>

                  {Name !== "" && Name !== null && <Text mt={5}> {"Hi, i am " + Name + " !"}</Text>}
                  <Text mt={5}>Followers - {followers} </Text>
                  <Text mt={5}>Following  - {following} </Text>
                  <Text mt={5}>Total Repos - {Totalrepo}</Text>
                  {loc !== "" && <Text mt={5}> {"Location -" + loc}</Text>}
                  {Bloglink !== "" && <Text mt={5}> {"Look on my blogs here- " + Bloglink}
                    <IconButton ml="15px" onClick={() => window.open(Bloglink, "_blank")} icon={<FaLink fontSize="10px" />} /></Text>}
                </Box>
              </Center>
            </>
          }
          <Spacer />
          <Spacer />
          <Flex flexDirection={check ? "row" : "column"} >
            <img src={CATS} height="50%" width={check ? "40%" : "100%"} lazyload="off" alt="Cats-pic" />

            <Box textAlign="center">
              <Box mt={check ? "20%" : "0%"} ml={check ? "15%" : "0%"}>
                <Flex direction="column">
                  <Text
                    fontSize="xl"
                    mr={check ? "10%" : "0%"}
                  > What a cute cat likes.Maybe some cat-food but im special i want your opinion on how much rating you would give this  </Text>
                  <Text mt="5%">
                    Also share and stars⭐ are appreciated !! MEOWW
                    <Tooltip label="Star! on github" >
                      <a href='https://github.com/varuogm/git-CAT'
                        target='_blank'><IconButton ml={2} mr={1}
                          boxSize="30px"
                          icon={<FaGithub />} isRound="true"></IconButton></a>
                    </Tooltip>
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Spacer mt="50px" />
          <Heading mt='0' mb='5' size='2xl'
            fontWeight='extrabold' bgClip='text'

            bgGradient='linear(to-r, yellow.500, green.300, cyan.500)' >
            Compare friends stats
          </Heading>
          <Spacer mt="30px" />
          <Text
            ml={10} fontSize="m"
            fontWeight="bold" color="cyan.500">
            A Mock compare with your friend stats
          </Text>
          <Spacer mt="50px" />
          <Flex >
            <InputGroup flexDirection={check ? "row" : "column"} mt="25px" size="lg">
              <InputLeftAddon pr={20} children={Name} />
              <Heading fontWeight='bold' bgClip='text'
                size="lg" ml="5%" mr="5%"
                bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
              >  VS</Heading>
              <Input className="prompt"
                boxShadow="inner"

                type="text"
                value={friendUsername}

                onChange={onFriendChangeHandler} variant="filled"
                placeholder="Enter your fridn name here" />
            </InputGroup>
          </Flex>
          <chakra.button
            shadow="lg" rounded="lg"
            px="3" py="2" bg="red.400"
            _hover={{ bg: "green.400" }}
            type="submit"
            mt={10}
            pl={5}
            boxShadow="inner"
            onClick={submitfriendHandler}  >
            Compare
            <IconButton ml={1} w={5} h={7} icon={<FiSearch />} />
          </chakra.button>
          <Spacer mt="50px" />


          <Flex flexDirection={check ? "row" : "column"} >
            <Box p="5" background="repeating-radial-gradient(
                circle,gray,
                purple 10px,
                 #4b026f 10px, 
                #4b026f 20px)">
              <Image objectFit="cover" src={userImg} />
            </Box>
            <Heading fontWeight='bold' bgClip='text'
              size="lg" ml="5%" mr="5%"
              bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
              align="center"
            >  VS</Heading>
            <Spacer />
            <Box p="5" bg="yellow.400" background="repeating-radial-gradient(
                circle,gray,
                purple 10px,
                 #4b026f 10px, 
                #4b026f 20px)">
              <Image objectFit="cover" src={frienduserImg} />
            </Box>
          </Flex>
          <Spacer mt="50px" />

          {show === true && <Text ml={10} fontSize="lg"
            fontWeight="bold" color="pink.700">
            {TotalFriendRepo >= Totalrepo ?
              <h1> {friendUsername + " is winner with " + TotalFriendRepo + " repos"}</h1> :
              <h1> {username + " is winner " + Totalrepo + " repos"}</h1>}
          </Text>
          }
          <Spacer mt="50px" />

          <Alert status="success">
            <AlertIcon />
            This comaprison is only based on Repo count and nothing else 😅.
            You both are gem 💎
          </Alert>
          <Spacer mt="100px" />
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
                show Toast src={CAT} alt="Cat gif" />
              </span>
              <Text margin="5" >
                You've reached the end 💖 BTW click me 🐾!!
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
                  boxShadow="inner"
                  src={GouravImage}
                  alt="gourav image"
                />
              </Center>
              <Stack direction="row" mt="20px" align="center" justify="center">

                <ButtonGroup boxShadow="inner" color="gray.600" >
                  <IconButton boxShadow="inner" onClick={() => window.open("https://twitter.com/Varougm", "_blank")} icon={<FaTwitter fontSize="30px" />} />
                  <IconButton boxShadow="inner" onClick={() => window.open("https://github.com/varuogm", "_blank")} icon={<FaGithub fontSize="30px" />} />
                  <IconButton boxShadow="inner" onClick={() => window.open("https://in.linkedin.com/in/gourav-majee-724b37188", "_blank")} icon={<FaLinkedin fontSize="30px" />} />
                  <IconButton boxShadow="inner" onClick={() => window.open("https://gouravmajee.me/", "_blank")} icon={<FaLink fontSize="30px" />} />
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
      {console.log("muje laga hi tha tum yaaha kuch masti karne aaoyge")}

    </>
  );
};
export default Profile;


