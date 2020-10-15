import React from 'react'
import { handleInputChange, handleSubmit } from '../utilities'

class PlaylistAddForm extends React.Component{
  state = {
    name: ""
  }

  render(){
    return(
      <form onSubmit={e => handleSubmit.call(this, {
        e,
        callback: this.props.addPlaylist,
        currentState: {...this.state},
        clearState: {...this.props.clearState}
      })}>
      <label>Add New Playlist: </label>
      <input type="text" name="name" value={this.state.name} onChange={e => handleInputChange.call(this, e)} /><br/>
      <input type="submit" value="add"/>
    </form>
    )
  }
}

export default PlaylistAddForm