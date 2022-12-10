import React from 'react';
import '../style/FirstArea.css';
import pcGif from '../img/pcGif.gif'
// import { BsLayerBackward } from 'react-icons/bs';

function FirstArea() {
  return (
    <main className="firstArea">        
      <img src={ pcGif } width='830px'></img>
    </main>
  );
}

export default FirstArea;