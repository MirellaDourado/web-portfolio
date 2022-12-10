import React, { useContext } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import PortfolioContext from '../context/PortfolioContext'
import '../style/About.css'
import deerDarkMode from '../img/deerDarkMode.png';
import deerLightMode from '../img/deerLightMode.png';

function About() {
  const { darkMode } = useContext(PortfolioContext)

  return(
      <div id="web-portfolio" className={ darkMode ? 'dark-theme'
      : 'light-theme'}>
      <NavBar />
      <main className="main-about">
        <div>
          <h2> Full Stack <br /> <span> Web Developer. </span>
          </h2>
          <p>
            I'm Mirella, a programmer born in 2001 based on Brazil.
          </p>
          <p>
            I started studying programming by myself during the pandemic in 2020, after 2 years I became a Trybe Student - a programming school based on Brazil with a focus on JavaScript - aiming for full stack developer position.
            Since then, I did projects with some tools and technologies, like: HTML, CSS, JavaScipt, React, Redux and Java.
          </p>
          <p>
            Not only focusing on hard skills, I also learned about soft skills to increase my work area, such as: self-leadership, assertiveness, active listening, empathy, resilience, collaboration and assertive communication
          </p>
        </div>
        <img src={ darkMode ? deerDarkMode : deerLightMode } alt="Mirella Dourado" />
      </main>
      <Footer />
    </div>
  )
}

export default About;
