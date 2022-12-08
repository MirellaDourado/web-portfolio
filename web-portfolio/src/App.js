import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
// import LoginTrybeTunes from './pages/pages-trybetunes/LoginTrybeTunes'
// import SearchTrybeTunes from './pages/pages-trybetunes/SearchTrybeTunes'
// import AlbumTrybeTunes from './pages/pages-trybetunes/AlbumTrybeTunes'
// import Favorites from './pages/pages-trybetunes/Favorites'
// import Profile from './pages/pages-trybetunes/Profile'
// import ProfileEdit from './pages/pages-trybetunes/ProfileEdit'
// import NotFound from './pages/NotFound';
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
        {/* <Route exact path="/trybetunes" component={ LoginTrybeTunes } />
        <Route exact path="/trybetunes/search" component={ SearchTrybeTunes } />
        <Route exact path="/trybetunes/album/:id" component={ AlbumTrybeTunes } />
        <Route exact path="/trybetunes/favorites" component={ Favorites } />
        <Route exact path="/trybetunes/profile/" component={ Profile } />
        <Route exact path="/trybetunes/profile/edit" component={ ProfileEdit } />
        <Route path="*" component={ NotFound } /> */}
      </Switch> 
    </PortfolioProvider>
  );
}

export default App;
