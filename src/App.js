import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import ResourceContainer from './containers/ResourceContainer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import UserContainer from './containers/UserContainer'
import PlaylistContainer from './containers/PlaylistContainer'

function App() {
  return (
    <Router>
        <Route path="/" component={NavBar} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" render={props => <UserContainer {...props} />} />
          <Route path="/signup" render={props => <UserContainer {...props} />} />
          <Route path="/resources" render={props => <ResourceContainer {...props}/>} />
          <Route path="/bookshelves" render={props => <PlaylistContainer {...props}/>}/>
        </Switch>
    </Router>
  );
}

export default App;
