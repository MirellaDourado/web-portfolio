import React from 'react';
import '../style/FirstArea.css';
import pcGif from '../img/pcGif.gif'

function FirstArea() {
  return (
    <main className="firstArea">        
      <img src={ pcGif } width='830px'></img>
    </main>
  );
}

export default FirstArea;