import React from "react";
import Footer from "../footer/footer";
import About from "./about/about";
import Contact from "./contact/contact";
import Projects from "./projects/projects";
import Skills from "./skills/skills";
import "./body.css";
import AboutMe from "../aboutMe/AboutMe";
function Body(props) {
  return (
    <div className="body">
      <section id="abouts">
        <About />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="contacts">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default Body;
