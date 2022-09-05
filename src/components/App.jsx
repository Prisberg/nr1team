import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import { usePortfolioContext } from "../utils/PortfolioContext";
import Navbar from "./header/NavBar";
import JavaScript from "./pages/main/skills/skills-Info/JavaScript";
import Node from "./pages/main/skills/skills-Info/Node";
import Mongo from "./pages/main/skills/skills-Info/Mongo";
import ReactInfo from "./pages/main/skills/skills-Info/ReactInfo";
import UxDesign from "./pages/main/skills/skills-Info/UxDesign";
import Contact from "./pages/contact/Contact";
import Footer from "./footer/Footer";
import Main from "./pages/main/Main";
import Team from "./pages/main/teams/Team";
import Confirm from "./pages/contact/Confirm";

function App() {
  const { loggedIn } = usePortfolioContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={loggedIn ? null : <Login />} />
          <Route path="/register" element={loggedIn ? null : <Register />} />
          <Route path="/Node" element={<Node />} />
          <Route path="expertise/JavaScript" element={<JavaScript />} />
          <Route path="expertise/Mongo" element={<Mongo />} />
          <Route path="expertise/ReactInfo" element={<ReactInfo />} />
          <Route path="expertise/UxDesign" element={<UxDesign />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/confirm" element={<Confirm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
