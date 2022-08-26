import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import NavBar from "./header/NavBar";
import Contact from "./main/contact/Contact";
import About from "./main/about/About";
import JavaScript from "./main/skills/skills-Info/JavaScript";
import Figma from "./main/skills/skills-Info/Figma";
import Node from "./main/skills/skills-Info/Node";
import Mongo from "./main/skills/skills-Info/Mongo";
import ReactInfo from "./main/skills/skills-Info/ReactInfo";
import UxDesign from "./main/skills/skills-Info/UxDesign";

import Footer from "./footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/JavaScript" element={<JavaScript />} />
          <Route path="/Node" element={<Node />} />
          <Route path="/Figma" element={<Figma />} />
          <Route path="/Mongo" element={<Mongo />} />
          <Route path="/ReactInfo" element={<ReactInfo />} />
          <Route path="/UxDesign" element={<UxDesign />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
