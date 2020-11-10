import React from 'react'
import { Redirect } from 'react-router-dom'
import { handleInputChange, handleSubmit } from '../../../utilities'

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
            <div className="form-group">
              <label>Playlist Name: </label>
              <input className="form-control" type="text" name="name" value={this.state.name} onChange={e => handleInputChange.call(this, e)} /><br/>
            </div> 
            <input className="btn btn-primary tertiary-background" type="submit" value="add"/>
          </form>
        </>
      )
    }
  }
}

export default PlaylistAddForm