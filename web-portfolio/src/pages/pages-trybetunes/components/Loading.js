import React, { Component } from 'react';
import loading from '../images/loading.gif';

class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <p>
          Loading...
        </p>
        <img src={ loading } alt="Barra de carregamento" />
      </div>
    );
  }
}

export default Loading;
