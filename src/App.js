import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import ResourceContainer from './containers/ResourceContainer'
import NavBar from './components/NavBar'
import ModalWrapper from './components/ModalWrapper'
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
          <Route path="/login" render={props => {
            // return (
            //   <>
            //     <ModalWrapper title="Login" id="login-form" previousUrl={url.slice(0,url.indexOf("/playlists"))}>
            //       <UserContainer />
            //     </ModalWrapper>
            //     <PlaylistContext 
            //       context={this.props.location.context}
            //       resourceId={this.props.location.state ? this.props.location.state.resourceId : null}
            //     />
            //   </>
            // )
            // debugger;
            return (
              <ModalWrapper title="Login" id="login-form" previousUrl={props.location.previousUrl}>
                <UserContainer {...props}/>
              </ModalWrapper> 
            )
          }}/>
          <Route path="/signup" render={props => <UserContainer {...props} />} />
          <Route path="/resources" render={props => <ResourceContainer {...props}/>} />
          <Route path="/bookshelves" render={props => <PlaylistContainer {...props}/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
