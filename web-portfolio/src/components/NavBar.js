import React, { Component } from 'react';
import { BsFillBrightnessHighFill, BsFillMoonFill } from 'react-icons/bs';

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
        <nav id='nav-bar'>
          <button
            aria-label="Open Menu"
            className="btn-mobile"
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded="false"
            onClick={ this.handleMenu }>
            <span id="hamb"></span>
          </button>  
          <ul className='menu'>
            <a href='#aboutMe'>
              About me
            </a>
            <a href='#projects'>
              Work
            </a>
            <a href='#projects'>
              Contact
            </a>
            <label className="toggle-wrapper" htmlFor="toggle">
            <div className={`toggle ${DarkMode ? "enabled" : "disabled"}`}>
              <span className="hidden">
                {DarkMode ? "Enable" : "Disable"}
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
          </ul>
        </nav>
      </header>
  )
  }
}

export default NavBar