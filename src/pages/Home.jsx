import React from "react";
import Landing from "../components/Landing";
import Featured from "../components/Featured";
import Properties from "../components/Properties";
import Soon from "../components/Soon";

const Home = () => {
  return (
    <>
      <Landing />
      <Featured />
      <Properties />
      <Soon />
    </>
  );
};

export default Home;
