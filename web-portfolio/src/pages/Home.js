import React, { Component } from "react";
import Projects from '../components/Projects';
import FirstArea from "../components/FirstArea";
import NavBar from '../components/NavBar';
import Contact from "../components/Contact";
// import Transition from "../components/Transition";

class Home extends Component {
  constructor() {
    super();
    this.state ={
      DarkMode: false,
    }
  }

  componentDidMount() {
    if (!JSON.parse(localStorage.getItem('DarkMode'))) {
      localStorage.setItem('DarkMode', JSON.stringify(false));
    } else {
      this.setState({
        DarkMode: JSON.parse(localStorage.getItem('DarkMode')),
      });
    }
  }

  changeMode = () => {
    const { DarkMode } = this.state;
    this.setState({
      DarkMode: !DarkMode
    })
    localStorage.setItem('DarkMode', JSON.stringify(!DarkMode));
  }

  render() {
    const { DarkMode } = this.state;
    return(
      <div
       className={ DarkMode ? 'dark-theme'
        : 'light-theme'}
        id="web-portfolio"
      >
        <NavBar
          changeMode={ this.changeMode }
          DarkMode={ DarkMode } />
        <FirstArea 
          DarkMode={ DarkMode } />
        {/* <Projects /> */}
        <Contact />
      </div>
    );
  }
}

export default Home;