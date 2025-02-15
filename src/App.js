import "../src/assets/styles/App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProfessionalCareer from "./components/ProfessionalCareer";
import Footer from "./components/Footer";
import Intro from "./components/Intro";


function App() {
  return (
    <div>
      <Navbar/>

        {/*En cours de chantier*/}
        <Intro />

      <AboutMe />
      <Skills />
      <Projects />
      <ProfessionalCareer />
      {/*<Footer />*/}
      </div>
  );
}

export default App;
