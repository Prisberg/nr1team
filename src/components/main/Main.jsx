import React from "react";
import Skills from "./skills/Skills";
import Teams from "./teams/Teams";
import Greeting from "./Greeting";
import Skillsinfo from "./skills/Skillsinfo";

function Main() {
  return (
    <>
      <Greeting />
      <Teams />
      <Skills />
      <Skillsinfo />
    </>
  );
}

export default Main;
