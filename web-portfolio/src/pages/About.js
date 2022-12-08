import React, { useContext } from "react";
import PortfolioContext from '../context/PortfolioContext'

function About() {
  const { darkMode } = useContext(PortfolioContext)

  return(
    <section>
      <h2> About Me </h2>
      <p> { darkMode } </p>
    </section>
  )
}

export default About;
