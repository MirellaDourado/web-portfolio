import React, { Component } from 'react';
import '../style/FirstArea.css';
import deerDarkMode from '../img/deerDarkMode.png';
import deerLightMode from '../img/deerLightMode.png';
// import { BsLayerBackward } from 'react-icons/bs';

class FirstArea extends Component {

  // parallax = (element) => {
  //   const speed = element.target.getAttribute('data-speed')
    
  //   const y = (element.clientY * speed) / 100
  //   const x = (element.clientX * speed) / 100
  //   element.target.style.transform = `translateX(${x}px) translateY(${y}px)`;
  // }

  render() {
    const { DarkMode } = this.props;
    return (
      <section className="firstArea">        
          {/* <button type='button' onClick={  } className="mode-btn">{ DarkMode ? <BsFillMoonFill size="20px"/> : <BsFillBrightnessHighFill/> }</button> */}
          <div className='appresentation'>
            <div id='stars3' />
            <div id='stars' />
            <div id='stars2' />
            { DarkMode ? <img src={ deerDarkMode } alt="Deer" className='deer' /> : <img src={ deerLightMode } alt="Deer" className='deer' />}
          </div>
      </section>
    );
  }
}

export default FirstArea;