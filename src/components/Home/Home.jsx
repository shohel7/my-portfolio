import React from "react";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="bg-indigo-950 font-poppins md:px-24 px-7">
        <Navigation />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
