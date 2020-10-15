import React from 'react'
import { Redirect } from 'react-router-dom'
import PlaylistAddForm from './PlaylistAddForm'
import PlaylistContext from './PlaylistContext'

class PlaylistForm extends React.Component{
  state = {
    name: "",
    selectId: null,
    submitted: false
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
      selectId: null,
      submitted: true
    })
  }

  render(){
    if (this.state.submitted){
      const context = this.props.location.context
      const redirectUrl = context === "resource" ? `${context}s/${this.props.location.state.resourceId}` : context
      return <Redirect to={`/${redirectUrl}`} />
    } else {
      return (
        <div>
          <PlaylistAddForm 
            addPlaylist={this.props.addPlaylist}
            clearState={{name: "", selectId: null}}
            context={this.props.location.context}
            resourceId={this.props.location.state ? this.props.location.state.resourceId : null}
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
            resourceId={this.props.location.state ? this.props.location.state.resourceId : null}
          />
        </div>
      )
    }
  }
}

export default PlaylistForm