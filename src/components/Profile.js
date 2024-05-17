import React, { useState } from "react";
import {
  Box,
  Spacer,
  useToast,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";

//Assests
import CAT from "../Assests/Images/Kitty.gif";

//Coponents
import AccordionComponent from "./atoms/Accordion";
import Footer from "./Footer";
import HeaderComponent from "./Header";
import SearchInput from "./Search";
import Compare from "./Compare";
import Middle from "./Middle";

import CatClicker from "./atoms/CatClicker";
import WinnerText from "./Winner";
import UserModel from "./atoms/UserModel";

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
    console.log(profileJson);

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
          <SearchInput
            username={username}
            onChangeHandler={onChangeHandler}
            submitHandler={submitHandler}
          />

          {show === true && (
            <UserModel
              check={check}
              userImg={userImg}
              Name={Name}
              followers={followers}
              following={following}
              Totalrepo={Totalrepo}
              loc={loc}
              Bloglink={Bloglink}
              Bio={Bio}
            />
          )}

          <Middle check={check} />

          <Compare
            check={check}
            Name={Name}
            friendUsername={friendUsername}
            onFriendChangeHandler={onFriendChangeHandler}
            submitfriendHandler={submitfriendHandler}
            userImg={userImg}
            frienduserImg={frienduserImg}
          />

          {show === true && (
            <WinnerText
              username={username}
              friendUsername={friendUsername}
              Totalrepo={Totalrepo}
              TotalFriendRepo={TotalFriendRepo}
            />
          )}

          <Box mt={5}>
            <CatClicker Name={Name} CAT={CAT} />
          </Box>
          <Spacer mb="200px" />

          <AccordionComponent />
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Profile;
