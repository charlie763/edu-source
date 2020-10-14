import React from 'react'
import { handleInputChange, handleSubmit } from '../utilities'
import PlaylistContext from './PlaylistContext'

class PlaylistForm extends React.Component{
  state = {
    name: "",
    selectName: "",
    selectId: null
  }

  componentDidMount(){
    this.props.fetchPlaylists()
  }

  handleSelectChange = e => {
    this.setState({
      ...this.state,
      selectName: e.target.options[e.target.selectedIndex].text,
      selectId: e.target.options[e.target.selectedIndex].id,
    })
  }

  handleAddSubmit = e => {
    e.preventDefault()
    this.props.addPlaylist(this.state.name)
    this.props.addResourceToPlaylist()
    this.setState({
      name: "",
      selectName: ""
    })
  }

  handleSelectSubmit = e=> {
    e.preventDefault()
    const name = this.state.selectName.length > 0 ? this.state.selectName : this.props.playlists[0]
    this.props.addResourceToPlaylist()
    this.setState({
      name: "",
      selectName: ""
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
          <select name="selectName" onChange={this.handleSelectChange}>
            {this.props.playlists.map(playlist => (
              <option key={playlist.id}>{playlist.name}</option>
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