import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import ResourceContainer from './containers/ResourceContainer'

function App() {
  return (
    <Router>
        <Route path="/resources" render={props => <ResourceContainer {...props}/>} />
    </Router>
  );
}

export default App;
