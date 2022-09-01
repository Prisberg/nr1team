import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./header/NavBar";
import JavaScript from "./pages/main/skills/skills-Info/JavaScript";
import Node from "./pages/main/skills/skills-Info/Node";
import Figma from "./pages/main/skills/skills-Info/Figma";
import Mongo from "./pages/main/skills/skills-Info/Mongo";
import ReactInfo from "./pages/main/skills/skills-Info/ReactInfo";
import UxDesign from "./pages/main/skills/skills-Info/UxDesign";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Cases from "./pages/cases/Cases";
import Footer from "./footer/Footer";
import Main from "./pages/main/Main";
import Team from "./pages/main/teams/Team";
import Confirm from "./pages/contact/Confirm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
          <Route path="/team" element={<Team />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
