import React from 'react'
import { handleInputChange, handleSubmit } from '../utilities'

class CommentForm extends React.Component{
  state = {
    text: ""
  }

  render(){
    return(
      <form onSubmit={e => handleSubmit.call(this, {
        e,
        callback: this.props.addComment,
        currentState: {...this.state, userId: this.props.user.id, resourceId: this.props.resourceId},
        cleanState: {text: ""}
      })}>
        <textarea name="text" value={this.state.text} placeholder="write comment here..." onChange={e => handleInputChange.call(this, e)} /><br/>
        <input type="submit" value="Post Comment"/>
      </form>
    )
  }
}

export default CommentForm