import React from "react";
import Greeting from "./Greeting";
import Skills from "./skills/Skills";
import Team from "./teams/Team";
import Cases from "../cases/Cases";

function Main() {
  return (
    <>
      <Greeting />
      <Team />
      <Skills />
      <Cases />
    </>
  );
}

export default Main;
