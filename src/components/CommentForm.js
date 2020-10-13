import React from 'react'
import { handleInputChange, handleSubmit } from '../utilities'

class CommentForm extends React.Component{
  state = {
    text: ""
  }

  // onSubmit={e => handleSubmit.call(this, {
  //   e,
  //   callback: this.props.addComment({...state, userId: this.props.user.id}),
  //   currentState: this.state,
  //   cleanState: {text: ""}
  // })}

  render(){
    return(
      <form>
        <textarea name="text" value={this.state.text} placeholder="write comment here..." onChange={e => handleInputChange.call(this, e)} /><br/>
        <input type="submit" value="Post Comment"/>
      </form>
    )
  }
}

export default CommentForm