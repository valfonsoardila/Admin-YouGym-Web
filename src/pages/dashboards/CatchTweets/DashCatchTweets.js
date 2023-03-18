import React from "react";
import { SearchBar, /*MainDashboard,*/ RigtSide } from "./../CatchTweets";
import {BackGround, SubBackGround} from "./DashCatchTweetsStyles";
const DashCatchTweets = () => {
  return (
    <BackGround>
      <SearchBar />
      <SubBackGround>
        <RigtSide />
      </SubBackGround>
    </BackGround>
  );
};

export default DashCatchTweets;
