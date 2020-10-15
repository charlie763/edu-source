import React from 'react'
import PlaylistAddForm from './PlaylistAddForm'
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
        <PlaylistAddForm 
          addPlaylist={this.props.addPlaylist}
          clearState={{name: "", selectId: null}}
          context={this.props.location.context}
          resourceId={this.props.location.state.resourceId}
        />
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
          resourceId={this.props.location.state.resourceId}
        />
      </div>
    )
  }
}

export default PlaylistForm