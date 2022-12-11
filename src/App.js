import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PortfolioProvider from './context/PortolioProvider';
import './style/App.css'

function App() {
  return (
    <PortfolioProvider>
      <Switch>
        <Route 
          render={ () => < Home /> }
          exact
          path="/"
        />
        <Route
          render={ () => <About /> }
          exact
          path="/about"
        />
      </Switch> 
    </PortfolioProvider>
  );
}

export default App;
