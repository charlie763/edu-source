import React from 'react'
import { connect } from 'react-redux'
import { displayGrade } from '../utilities'
import Resources from './Resources'
import Resource from './Resource'
import Playlists from './Playlists'

class PlaylistContext extends React.Component {
  findResource = id => {
    return this.props.resources.find(resource => resource.id == id)
  }

  render(){
    switch(this.props.context){
      case "resources":
        return <Resources resources={this.props.resources} displayGrade={displayGrade}/>
      case "resource":
        return  <Resource
                  match={{url: `/resources/${this.props.resourceId}`}}
                  resource={this.findResource(this.props.resourceId)} 
                  loadStatus={this.props.loadStatus} 
                  displayGrade={displayGrade}
                />
      case "bookshelves":
        return <Playlists 
                  playlists={this.props.playlists}
                  match={{path: "bookshelves"}}
              />
      default:
        return <></>
    }
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists.list,
  resources: state.resources.list,
  loadStatus: state.resources.loadStatus
})

export default connect(mapStateToProps)(PlaylistContext)