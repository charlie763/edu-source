import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { fetchPlaylists } from '../actions/playlistActions'
import { fetchResources } from '../actions/resourceActions'
import Playlists from '../components/Playlists'
import Playlist from '../components/Playlist'

class PlaylistContainer extends React.Component{
  componentDidMount(){
    this.props.fetchPlaylists()
    if (!this.props.resourcesLoadStatus){
      this.props.fetchResources()
    }
  }

  render(){
    return(
      <div>
        <Switch>
          <Route path={`${this.props.match.path}/:id`} render={props => 
            <Playlist 
              {...props}
              playlists={this.props.playlists}
            />          
          }/>
          <Route path={`${this.props.match.path}`} render={props => 
            <Playlists {...props} playlists={this.props.playlists}/>          
          }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists.list,
  resourcesLoadStatus: state.resources.loadStatus,
  resources: state.resources.list
})

export default connect(mapStateToProps, { fetchPlaylists, fetchResources })(PlaylistContainer)