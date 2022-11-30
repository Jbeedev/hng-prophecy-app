import React from "react";

import Hero from "../../component/Hero";
import Prophecy from "../../component/Prophecy";

import { About } from "../../component/About";
import { Contact } from "../../component/Contact";
import { OurTeam } from "../../component/OurTeam";
const Home = () => {
  return (
    <>
      <Hero />
	  <Prophecy />
      <About />
      <OurTeam />
      <Contact />
    </>
  );
};

export default Home;
