import React from 'react'
import { Redirect } from 'react-router-dom'
import { handleInputChange, handleSubmit } from '../utilities'
import PlaylistContext from './PlaylistContext'

class PlaylistAddForm extends React.Component{
  state = {
    name: "",
    submitted: false
  }

  render(){
    if (this.state.submitted){
      const context = this.props.location ? this.props.location.context : this.props.context
      const redirectUrl = context === "resource" ? `${context}s/${this.props.resourceId}` : context
      return <Redirect to={`/${redirectUrl}`} />
    } else {
      return(
        <>
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
          <PlaylistContext 
            context={this.props.location ? this.props.location.context : null}
          />
        </>
      )
    }
  }
}

export default PlaylistAddForm