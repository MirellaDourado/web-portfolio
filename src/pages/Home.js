import React, { useContext } from "react";
// import Footer from '../components/Projects';
import FirstArea from "../components/FirstArea";
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import PortfolioContext from "../context/PortfolioContext";
// import Transition from "../components/Transition";

function Home() {
  const { darkMode } = useContext(PortfolioContext);

  return(
    <div
      className={ darkMode ? 'dark-theme'
      : 'light-theme'}
      id="web-portfolio"
    >
      <NavBar />
      <FirstArea />
      <Footer />
    </div>
  );
}

export default Home;