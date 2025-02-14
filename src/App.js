import "../src/assets/styles/App.css";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProfessionalCareer from "./components/ProfessionalCareer";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <div className="flex-container">
          <h1>
              <span className="italic">STAUFFER &nbsp;Lorène</span><br/>
              Développeuse web et web mobile<br/><br/>
              En recherche d’alternance
          </h1>
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <ProfessionalCareer />
      {/*<Footer />*/}
      </div>
  );
}

export default App;
