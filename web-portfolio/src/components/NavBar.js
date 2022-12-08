import React, { useContext, useEffect } from 'react';
import '../style/Header.css';
import LogoLightMode from '../img/LogoLightMode.png'
import LogoDarkMode from '../img/LogoDarkMode.png'
import PortfolioContext from '../context/PortfolioContext';

function NavBar() {
  const {setDarkMode, darkMode} = useContext(PortfolioContext);

  const changeMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('DarkMode', JSON.stringify(!darkMode));
  }

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('DarkMode'))) {
      localStorage.setItem('DarkMode', JSON.stringify(false));
    } else {
      setDarkMode(JSON.parse(localStorage.getItem('DarkMode')))
    }
  }, [])

  return (
    <header>
      <img
        src={ darkMode ? LogoLightMode : LogoDarkMode } alt="Logo"
      />
      <nav id='nav-bar'> 
      <label className="toggle-wrapper" htmlFor="toggle">
            <button
              id="toggle"
              name="toggle"
              className={`toggle ${ darkMode ? "enabled" : "disabled" }`}
              onClick={() => changeMode()}
            >
              Dark Mode: { darkMode ? 'on' : 'off' }
            </button>
        </label>
          <a href='#aboutMe'>
            About
          </a>
          <div className='work-menu'>
            <p>Work</p>
          <div className='work-list'>
            <li> Pixels Art </li>
            <li> Color Guess </li>
            <li> TrybeTunes </li>
            <li> TryUnfo </li>
            <li> Trybe Wallet </li>
            <li> Shopping Cart </li>
            <li> Solar System </li>
            <li> Trivia </li>
          </div>
          </div>
          <div id="lets-talk">
            <a href='mailto:mirellaalvesdourado@gmail.com'>
              Let's Talk
            </a>
          </div>
      </nav>
    </header>
  )
}

export default NavBar
