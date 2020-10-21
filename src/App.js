import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import ResourceContainer from './containers/ResourceContainer'
import NavBar from './components/NavBar'
import UserContainer from './containers/UserContainer'
import PlaylistContainer from './containers/PlaylistContainer'

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" render={props => <ResourceContainer {...props}/>} />
          <Route path="/logout" render={props => <UserContainer {...props}/>}/>
          <Route path="/login" render={props => <UserContainer {...props} previousUrl={props.location.previousUrl}/>} />
          <Route path="/signup" render={props => <UserContainer {...props} />} />
          <Route path="/resources" render={props => <ResourceContainer {...props}/>} />
          <Route path="/bookshelves" render={props => <PlaylistContainer {...props}/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
