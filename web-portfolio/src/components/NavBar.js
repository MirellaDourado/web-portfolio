import React, { Component } from 'react';
import { BsFillBrightnessHighFill, BsFillMoonFill } from 'react-icons/bs';
import '../style/Header.css';
import LogoLightMode from '../img/LogoLightMode.png'
import LogoDarkMode from '../img/LogoDarkMode.png'

class NavBar extends Component {

  handleMenu = () => {
    const navHamburguer = document.querySelector('#nav-bar');
    navHamburguer.classList.toggle('active');
    // const active = navHamburguer.classList.contains('active')
  }

  render() {
    const { changeMode, DarkMode } = this.props
    return (
      <header>
        <img
          src={ DarkMode ? LogoLightMode : LogoDarkMode }
        />
        <nav id='nav-bar'> 
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
            <a id="lets-talk">
              Let's Talk
            </a>
            <label className="toggle-wrapper" htmlFor="toggle">
            <div className={`toggle ${ DarkMode ? "enabled" : "disabled" }`}>
              <span className="hidden">
                { DarkMode ? "Enable" : "Disable" }
              </span>
              <div className="icons">
                <BsFillBrightnessHighFill className='mode-icon' />
                <BsFillMoonFill className='mode-icon'/>
              </div>
              <input
                id="toggle"
                name="toggle"
                type="checkbox"
                checked={ DarkMode }
                onChange={() => changeMode()}
              />
            </div>
          </label>
        </nav>
      </header>
  )
  }
}

export default NavBar