import React from 'react'
import { handleInputChange, handleSubmit } from '../utilities'
import PlaylistContext from './PlaylistContext'

class PlaylistForm extends React.Component{
  state ={
    name: ""
  }

  componentDidMount(){
    this.props.fetchPlaylists()
  }

  render(){
    return (
      <div>
        <form onSubmit={e => handleSubmit.call(this, {
          e,
          callback: this.props.addPlaylist,
          currentState: this.state,
          cleanState: {name: ""}
        })}>
          <label>Add New Playlist: </label>
          <input type="text" name="name" value={this.state.name} onChange={e => handleInputChange.call(this, e)} /><br/>
          <input type="submit" value="add"/>
        </form>
        <form>
          <label>Select Playlist: </label>
          <select>
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