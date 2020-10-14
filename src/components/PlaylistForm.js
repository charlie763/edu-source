import React from 'react'
import { handleInputChange, handleSubmit } from '../utilities'
import PlaylistContext from './PlaylistContext'

class PlaylistForm extends React.Component{
  state = {
    name: "",
    selectName: ""
  }

  componentDidMount(){
    this.props.fetchPlaylists()
  }

  handleSelectChange = e => {
    this.setState({
      [e.target.name]: e.target.options[e.target.selectedIndex].text 
    })
  }

  render(){
    return (
      <div>
        <form onSubmit={e => handleSubmit.call(this, {
          e,
          callback: this.props.addPlaylist,
          currentState: {name: this.state.name},
          cleanState: {name: "", selectName: ""}
        })}>
          <label>Add New Playlist: </label>
          <input type="text" name="name" value={this.state.name} onChange={e => handleInputChange.call(this, e)} /><br/>
          <input type="submit" value="add"/>
        </form>
        <form onSubmit={e => {
          const name = this.state.selectName.length > 0 ? this.state.selectName : this.props.playlists[0]
          handleSubmit.call(this, {
            e,
            callback: this.props.addPlaylist,
            currentState: { name },
            cleanState: {name: "", selectName: ""}
          })
        }}>
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