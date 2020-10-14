import React from 'react'
import { handleInputChange, handleSubmit } from '../utilities'
import PlaylistContext from './PlaylistContext'

class PlaylistForm extends React.Component{
  state = {
    name: "",
    selectId: null
  }

  componentDidMount(){
    this.props.fetchPlaylists()
  }

  componentDidUpdate(prevProps){
    if (!prevProps.playlistAdded && this.props.playlistAdded){
      this.props.addResourceToPlaylist(this.props.location.state.resourceId, this.props.playlistAdded.id)
      this.setState({
        name: "",
        selectId: null
      })
    }
  }

  handleSelectChange = e => {
    this.setState({
      ...this.state,
      selectId: e.target.options[e.target.selectedIndex].id,
    })
  }

  handleAddSubmit = e => {
    e.preventDefault()
    this.props.addPlaylist({name: this.state.name})
  }

  handleSelectSubmit = e=> {
    e.preventDefault()
    const id = this.state.selectId ? this.state.selectId : this.props.playlists[0].id
    this.props.addResourceToPlaylist(this.props.location.state.resourceId, id)
    this.setState({
      name: "",
      selectId: null
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleAddSubmit}>
          <label>Add New Playlist: </label>
          <input type="text" name="name" value={this.state.name} onChange={e => handleInputChange.call(this, e)} /><br/>
          <input type="submit" value="add"/>
        </form>
        <form onSubmit={this.handleSelectSubmit}>
          <label>Select Playlist: </label>
          <select onChange={this.handleSelectChange}>
            {this.props.playlists.map(playlist => (
              <option id={playlist.id} key={playlist.id}>{playlist.name}</option>
            ))}
          </select><br/>
          <input type="submit" value="Select"/>
        </form>
        <PlaylistContext 
          context={this.props.location.context}
          displayGrade={this.props.displayGrade}
          resources={this.props.resources}   
        />
      </div>
    )
  }
}

export default PlaylistForm