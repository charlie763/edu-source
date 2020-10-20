import React from 'react'
import { connect } from 'react-redux'
import { displayGrade, isResourceInPlaylist, findResource } from '../utilities'
import Resources from './Resources'
import Resource from './Resource'
import Playlists from './Playlists'

class PlaylistContext extends React.Component {
  render(){
    switch(this.props.context){
      case "resources":
        return <Resources 
                resources={this.props.resources} 
                isResourceInPlaylist={resourceId => isResourceInPlaylist.call(this, resourceId)}
              />
      case "resource":
        return  <Resource
                  match={{url: `/resources/${this.props.resourceId}`}}
                  resource={findResource.call(this, this.props.resourceId)} 
                  loadStatus={this.props.loadStatus} 
                  displayGrade={displayGrade}
                />
      case "bookshelves":
        return <Playlists 
                  playlists={this.props.playlists}
                  user={this.props.user}
                  match={{path: "bookshelves"}}
              />
      default:
        return <></>
    }
  }
}

const mapStateToProps = state => ({
  user: state.user,
  playlists: state.playlists.list,
  resources: state.resources.list,
  loadStatus: state.resources.loadStatus
})

export default connect(mapStateToProps)(PlaylistContext)