import React from 'react'
import { Redirect } from 'react-router-dom'
import { handleInputChange, handleSubmit } from '../utilities'

class CommentForm extends React.Component{
  state = {
    text: "",
    submitted: false
  }

  render(){
    if (this.state.submitted){
      return <Redirect to={`/resources/${this.props.resourceId}`}/>
    } else {
      return(
        <div class="modal" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <form onSubmit={e => handleSubmit.call(this, {
                e,
                callback: this.props.addComment,
                currentState: {
                  ...this.state, 
                  userId: this.props.user.userId, 
                  resourceId: this.props.resourceId,
                  user: this.props.user
                },
                clearState: {text: ""}
              })}>
                <textarea name="text" value={this.state.text} placeholder="write comment here..." onChange={e => handleInputChange.call(this, e)} /><br/>
                <input type="submit" value="Post Comment"/>
              </form>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default CommentForm