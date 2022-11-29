import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
import Home from './pages/Home';
import LoginTrybeTunes from './pages/pages-trybetunes/LoginTrybeTunes'
import SearchTrybeTunes from './pages/pages-trybetunes/SearchTrybeTunes'
import AlbumTrybeTunes from './pages/pages-trybetunes/AlbumTrybeTunes'
import Favorites from './pages/pages-trybetunes/Favorites'
import Profile from './pages/pages-trybetunes/Profile'
import ProfileEdit from './pages/pages-trybetunes/ProfileEdit'
import NotFound from './pages/NotFound';

class App extends Component{
  render() {
  return (
    <Switch>
      <Route component = { Home }  exact path="/" />
      <Route exact path="/trybetunes" component={ LoginTrybeTunes } />
      <Route exact path="/trybetunes/search" component={ SearchTrybeTunes } />
      <Route exact path="/trybetunes/album/:id" component={ AlbumTrybeTunes } />
      <Route exact path="/trybetunes/favorites" component={ Favorites } />
      <Route exact path="/trybetunes/profile/" component={ Profile } />
      <Route exact path="/trybetunes/profile/edit" component={ ProfileEdit } />
      <Route path="*" component={ NotFound } />
    </Switch> 
    );
  }
}

export default App;
