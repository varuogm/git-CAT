import React, { useState } from "react";
import {
  Box,
  Flex,
  Input,
  Tooltip,
  Center,
  Spacer,
  Text,
  chakra,
  Image,
  Heading,
  useToast,
  IconButton,
  InputGroup,
  useColorMode,
  InputLeftAddon,
  useMediaQuery,
} from "@chakra-ui/react";

//Assests
import { FaGithub, FaLink } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import CATS from "../Assests/Images/Cats.png";
import CAT from "../Assests/Images/Kitty.gif";

//Coponents
import AccordionComponent from "./Accordion";
import Footer from "./Footer";
import HeaderComponent from "./Header";

import CatClicker from "./atoms/CatClicker";
import WinnerText from "./Winner";

const Profile = () => {
  let GouravImage = "https://i.ibb.co/b29dG1G/JEo6-Jh-S1-400x400.jpg";

  //TODO: 1. Add a new state variable called `friendUsername` and set it to an empty string
  //make object for similar data
  //use layout to set deafult items
  const [username, setUsername] = useState("");
  const [loc, setLoc] = useState("?");
  const [Bloglink, setBloglink] = useState("?");

  const [Bio, setBio] = useState("");
  const [userImg, setuserImg] = useState(
    "https://thumbs.dreamstime.com/b/happy-bear-family-characters-teddy-bear-family-happy-bear-family-characters-teddy-bear-family-vector-123893392.jpg"
  );
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [Totalrepo, setTotalrepo] = useState("");
  const [Name, setName] = useState("");

  const [show, setShow] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const [check] = useMediaQuery("(min-width: 1025px)");
  const toast = useToast();

  const [friendUsername, setFriendUsername] = useState("");
  const [frienduserImg, setFrienduserImg] = useState(
    "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc2MjkxNzg1NDQwNTY4NTEw/cats-with-down-syndrome-reasons-why-your-cat-cant-have-down-syndrome.jpg"
  );

  const [TotalFriendRepo, setfriendTotalrepo] = useState("");

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const onFriendChangeHandler = (e) => {
    setFriendUsername(e.target.value);
  };

  const submitfriendHandler = async (e) => {
    const Friendprofile = await fetch(
      `https://api.github.com/users/${friendUsername}`
    );
    const friendProfileJson = await Friendprofile.json();

    if (friendProfileJson) setFriendUsername(friendProfileJson.name);
    setFrienduserImg(friendProfileJson.avatar_url);

    var TotalFriendRepo = Object.keys(friendProfileJson.repos_url || {}).length;

    setfriendTotalrepo(TotalFriendRepo);
  };

  const submitHandler = async (e) => {
    setShow(true);

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();

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
      setuserImg(
        "https://thumbs.dreamstime.com/b/happy-bear-family-characters-teddy-bear-family-happy-bear-family-characters-teddy-bear-family-vector-123893392.jpg"
      );
      setBio("I think you didint entered anything in the box ⁉️ ANYWAY");
      setName("HI !! Im  pyara Bear of gourav");
      setFollowers("bear dont have followers");
      setFollowing("bears follows what he love ");
      setTotalrepo("Bears dont know about repo.OK .they know only eating");
    }
  };

  return (
    <>
      <HeaderComponent
        toggleColorMode={toggleColorMode}
        colorMode={colorMode}
      />

      <div style={{ padding: 40 }}>
        <div className="ui search">
          {/* SearchComponent start */}
          <InputGroup>
            <InputLeftAddon
              shadow="lg"
              px="5"
              py="5"
              children="your github @"
            />
            <Input
              className="prompt"
              boxShadow="inner"
              type="text"
              value={username}
              onChange={onChangeHandler}
              variant="filled"
              placeholder="Enter your username here"
            />
          </InputGroup>
          <br />
          <chakra.button
            shadow="lg"
            rounded="lg"
            px="3"
            py="2"
            bg="blue.400"
            _hover={{ bg: "pink.400" }}
            type="submit"
            pl={5}
            boxShadow="inner"
            onClick={submitHandler}
          >
            lets Find Out
            <IconButton ml={1} w={5} h={7} icon={<FiSearch />} />
          </chakra.button>
          <Spacer />
          {/* SearchComponent end */}
          {
            //horizontal card remaining
          }
          {show === true && (
            <>
              <Center
                flexDirection={check ? "row" : "column"}
                mt={8}
                boxShadow="inner"
              >
                <Box p={6} ml={8} color="white" boxShadow="inner">
                  <Image src={userImg} />
                </Box>

                <Box
                  p={6}
                  ml={8}
                  shadow="lg"
                  rounded="lg"
                  bg="white"
                  boxShadow="inner"
                  px="3"
                  py="2"
                  bgGradient="linear(to-r,gray.400, pink.300,purple.400)"
                >
                  <Text
                    color="black"
                    mt={0}
                    fontSize="l"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    {Bio}
                  </Text>

                  {Name !== "" && Name !== null && (
                    <Text color="black" mt={5}>
                      {" "}
                      {"Hi 👋, i am " + Name + " !"}
                    </Text>
                  )}
                  <Text color="black" mt={5}>
                    👨‍🚀 Followers - {followers}{" "}
                  </Text>
                  <Text color="black" mt={5}>
                    👨‍💻 Following - {following}{" "}
                  </Text>
                  <Text color="black" mt={5}>
                    🎒 Total Repos - {Totalrepo}
                  </Text>
                  {loc !== "" && (
                    <Text color="black" mt={5}>
                      {" "}
                      {"📍 Location -" + loc}
                    </Text>
                  )}
                  {Bloglink !== "" && (
                    <Text mt={5} color="black">
                      {" "}
                      {"📚 Look on my blogs here- " + Bloglink}
                      <IconButton
                        ml="15px"
                        onClick={() => window.open(Bloglink, "_blank")}
                        icon={<FaLink fontSize="10px" />}
                      />
                    </Text>
                  )}
                </Box>
              </Center>
            </>
          )}
          <Spacer />
          <Spacer />
          <Flex flexDirection={check ? "row" : "column"}>
            <img
              src={CATS}
              height="50%"
              width={check ? "40%" : "100%"}
              lazyload="off"
              alt="Cats-pic"
            />

            <Box textAlign="center">
              <Box mt={check ? "20%" : "0%"} ml={check ? "15%" : "0%"}>
                <Flex direction="column">
                  <Text fontSize="xl" mr={check ? "10%" : "0%"}>
                    {" "}
                    What a cute cat likes.Maybe some cat-food but im special i
                    want your opinion on how much rating you would give this{" "}
                  </Text>
                  <Text mt="5%">
                    Also share and stars⭐ are appreciated !! MEOWW
                    <Tooltip label="Star! on github">
                      <a
                        href="https://github.com/varuogm/git-CAT"
                        target="_blank"
                      >
                        <IconButton
                          ml={2}
                          mr={1}
                          boxSize="30px"
                          icon={<FaGithub />}
                          isRound="true"
                        ></IconButton>
                      </a>
                    </Tooltip>
                  </Text>
                </Flex>
              </Box>
            </Box>
          </Flex>
          <Spacer mt="50px" />

          {/* comparison of frinds */}

          <Heading
            mt="0"
            mb="5"
            size="2xl"
            fontWeight="extrabold"
            bgClip="text"
            bgGradient="linear(to-r, yellow.500, green.300, cyan.500)"
          >
            Compare friends stats
          </Heading>
          <Spacer mt="30px" />
          <Text ml={10} fontSize="m" fontWeight="bold" color="cyan.500">
            A Mock compare with your friend stats
          </Text>
          <Spacer mt="50px" />
          <Flex>
            <InputGroup
              flexDirection={check ? "row" : "column"}
              mt="25px"
              size="lg"
            >
              <InputLeftAddon pr={20} children={Name} />
              <Heading
                fontWeight="bold"
                bgClip="text"
                size="lg"
                ml="5%"
                mr="5%"
                bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
              >
                {" "}
                VS
              </Heading>
              <Input
                className="prompt"
                boxShadow="inner"
                type="text"
                value={friendUsername}
                onChange={onFriendChangeHandler}
                variant="filled"
                placeholder="Enter your fridn name here"
              />
            </InputGroup>
          </Flex>
          <chakra.button
            shadow="lg"
            rounded="lg"
            px="3"
            py="2"
            bg="red.400"
            _hover={{ bg: "green.400" }}
            type="submit"
            mt={10}
            pl={5}
            boxShadow="inner"
            onClick={submitfriendHandler}
          >
            Compare
            <IconButton ml={1} w={5} h={7} icon={<FiSearch />} />
          </chakra.button>
          <Spacer mt="50px" />

          <Center>
            <Flex flexDirection={check ? "row" : "column"}>
              <Box
                p="5"
                background="repeating-radial-gradient(
                circle,gray,
                purple 10px,
                 #4b026f 10px, 
                #4b026f 20px)"
              >
                <Image boxSize="350px" objectFit="cover" src={userImg} />
              </Box>
              <Heading
                fontWeight="bold"
                bgClip="text"
                size="lg"
                ml="5%"
                mr="5%"
                bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
                align="center"
              >
                {" "}
                VS
              </Heading>

              <Box
                p="5"
                bg="yellow.400"
                background="repeating-radial-gradient(
                circle,gray,
                purple 10px,
                 #4b026f 10px, 
                #4b026f 20px)"
              >
                <Image boxSize="350px" objectFit="cover" src={frienduserImg} />
              </Box>
            </Flex>
          </Center>
          <Spacer mt="50px" />

          {show === true && (
            <WinnerText
              username={username}
              friendUsername={friendUsername}
              Totalrepo={Totalrepo}
              TotalFriendRepo={TotalFriendRepo}
            />
          )}

          {/* cat clicker start */}
          <Box mt={5}>
            <CatClicker Name={Name} CAT={CAT} />
          </Box>
          <Spacer mb="200px" />
          {/* cat clicker end */}

          <AccordionComponent />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Profile;
