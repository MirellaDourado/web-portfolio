import React, { useContext, useEffect, useState } from 'react';
import '../style/Header.css';
import LogoLightMode from '../img/LogoLightMode.png'
import LogoDarkMode from '../img/LogoDarkMode.png'
import PortfolioContext from '../context/PortfolioContext';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const {setDarkMode, darkMode} = useContext(PortfolioContext);
  const [btnVisible, setBtn] = useState(false);

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

  const MobileBtn = () => {
    setBtn(!btnVisible)
  }

  return (
    <header>
      <Link to='/'>
        <img
          src={ darkMode ? LogoLightMode : LogoDarkMode } alt="Logo"
        />
      </Link>
      <nav id='nav-bar' className={btnVisible ? 'active' : ''}> 
        <button id='mobile-btn' onClick={ MobileBtn }>
          <AiOutlineMenu fontSize='30px'/>
        </button>
        <ul id='menu'>
          <li>
            <button
              id="toggle"
              name="toggle"
              className={`toggle ${ darkMode ? "enabled" : "disabled" }`}
              onClick={() => changeMode()}
            >
              Dark Mode: { darkMode ? 'on' : 'off' }
            </button>
          </li>
          <li>
            <button>
            <Link to='/about'>
              About
            </Link>
            </button>
          </li>
          <li>
          <button className='work-menu'>
            Work
          </button>
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
          </li>
          <li id="lets-talk">
            <button href='mailto:mirellaalvesdourado@gmail.com'>
              Let's Talk
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
