import React from 'react';
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ProfessionalCareer from "../components/ProfessionalCareer";
import Footer from "../components/Footer";

function Layout(props) {
    return (
      <>
          <Navbar/>
          <Intro />
          <AboutMe />
          <Skills />
          <Projects />
          <ProfessionalCareer />
          <Footer />
      </>
    );
}

export default Layout;