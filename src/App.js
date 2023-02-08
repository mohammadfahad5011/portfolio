
// import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Componenets/About";
import Contact from "./Componenets/Contact";
import FooterComponent from "./Componenets/FooterComponent";
import NavbarSection from "./Componenets/NavbarSection";
import Process from "./Componenets/Process";
import Project from "./Componenets/Project";
import ReviewMe from "./Componenets/ReviewMe";
import Skill from "./Componenets/Skill";
import Welcome from "./Componenets/Welcome";
// import Testimonial from "./Componenets/Testimonial";


function App() {
  return (
    <div className="App">
        <Welcome/>
        <NavbarSection />
        <About />
        <Skill/>
        <Project/>
        {/* <Testimonial/> */}
        {/* <Love/> */}
        <ReviewMe/>
        <Process/>
        <Contact/>
        <FooterComponent/>
    </div>
  );
}

export default App;
