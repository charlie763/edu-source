import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import ResourceContainer from './containers/ResourceContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
        <Route path="/" component={NavBar} />
        <Route path="/resources" render={props => <ResourceContainer {...props}/>} />
    </Router>
  );
}

export default App;
