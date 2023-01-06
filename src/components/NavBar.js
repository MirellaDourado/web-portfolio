import React, { useContext, useEffect } from 'react';
import '../style/Header.css';
import LogoLightMode from '../img/LogoLightMode.png'
import LogoDarkMode from '../img/LogoDarkMode.png'
import PortfolioContext from '../context/PortfolioContext';
import { Link } from 'react-router-dom';

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
      <Link to='/'>
        <img
          src={ darkMode ? LogoLightMode : LogoDarkMode } alt="Logo"
        />
      </Link>
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
          <Link to='/about'>
            About
          </Link>
          <div className='work-menu'>
            <p>Work</p>
          <div className='work-list'>
            <li>
              <a href="#TrybeTunes" >
                TrybeTunes
              </a>
            </li>
            <li> 
              <a href="#Trump" >
                Trump Game
              </a>
            </li>
            <li> 
              <a href="#Store">
                Online Store
              </a>
            </li>
            <a href="#Trivia">
            <li> Trivia </li>
            </a>
            <a href="#Recipe">
            <li> Recipe App </li>
            </a>
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
