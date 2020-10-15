import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchPlaylists } from '../actions/playlistActions'
import Playlists from '../components/Playlists'
import Playlist from '../components/Playlist'

class PlaylistContainer extends React.Component{
  componentDidMount(){
    this.props.fetchPlaylists()
  }

  render(){
    return(
      <div>
        <Switch>
          <Route path={`${this.props.match.path}/:id`}>
            <Playlist />
          </Route>
          <Route path={`${this.props.match.path}`} render={props => 
            <Playlists {...props} playlists={this.props.playlists}/>          
          }/>
        </Switch>
      </div>
    )
  }
}

export default connect(state => ({ playlists: state.playlists.list }), { fetchPlaylists })(PlaylistContainer)