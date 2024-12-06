import React from "react";
import Navbar from "../components/Navbar";
import Me from "../components/Me";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Education from "../components/Education";

function Homepage() {
  return (
    <div className="bg-back ">
      <Navbar />
      <Me />
      <AboutMe />
      <Skills />
      <Interests />
      <Education />
    </div>
  );
}

export default Homepage;
