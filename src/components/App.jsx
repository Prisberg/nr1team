import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import NavBar from "./header/NavBar";
import Contact from "./main/contact/Contact"
import AboutUS from "./main/about/AboutUS"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUS />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
