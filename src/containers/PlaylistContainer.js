import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Playlists from '../components/Playlists'
import Playlist from '../components/Playlist'

class PlaylistContainer extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route path={`${this.props.match.path}/:id`}>
            <Playlist />
          </Route>
          <Route path={`${this.props.match.path}`}>
            <Playlists />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default PlaylistContainer