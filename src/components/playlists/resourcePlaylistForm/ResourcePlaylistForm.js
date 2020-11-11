import React from 'react'
import { Redirect } from 'react-router-dom'
import { handleInputChange, findResource } from '../../../utilities'

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
    //this code makes sure that a resource gets added to a playlist that has recently been added from the playlist form
    if (!prevProps.playlistAdded && this.props.playlistAdded){
      this.props.addResourceToPlaylist(this.props.location.state.resourceId, this.props.playlistAdded.id)
      this.setState({
        name: "",
        selectId: null,
        submitted: true
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
    this.props.addPlaylist({
      name: this.state.name,
      resources: [{...findResource.call(this, this.props.location.state.resourceId)}]
    })
  }

  handleSelectSubmit = e => {
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
      return <Redirect to="/resources" />
    } else {
      return (
        <div>
          <form onSubmit={this.handleAddSubmit}>
            <div className="form-group  sub-form-group">
              <label>New Bookshelf: </label>
              <input className="form-control" type="text" name="name" value={this.state.name} onChange={e => handleInputChange.call(this, e)} /><br/>
            </div> 
            <input data-testid="add-playlist-submit" className="btn btn-primary tertiary-background" type="submit" value="add"/>
          </form>
          <br/>
          <form onSubmit={this.handleSelectSubmit}>
            <div className="form-group sub-form-group">
              <label>Existing Bookshelves: </label>
              <select className="form-control" onChange={this.handleSelectChange}>
                {this.props.playlists.map(playlist => (
                  <option id={playlist.id} key={playlist.id}>{playlist.name}</option>
                ))}
              </select><br/>
            </div>
            <input data-testid="select-playlist-submit" className="btn btn-primary tertiary-background" type="submit" value="Select"/>
          </form>
        </div>
      )
    }
  }
}

export default PlaylistForm