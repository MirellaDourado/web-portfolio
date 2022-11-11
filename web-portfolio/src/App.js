import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
import Home from './pages/Home';

class App extends Component{
  render() {
  return (
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}

export default App;
