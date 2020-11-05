import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { handleInputChange, handleSubmit } from '../../../utilities'

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
        <div data-testid="comment-form" className="modal" id="comment-form" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Comment</h5>
                <Link data-testid="exit-comment-modal" to={`/resources/${this.props.resourceId}`} type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </Link>
              </div>
              <div className="modal-body">
                <form onSubmit={e => handleSubmit.call(this, {
                  e,
                  callback: this.props.addComment,
                  currentState: {
                    ...this.state, 
                    userId: this.props.user.current.id, 
                    resourceId: this.props.resourceId,
                    user: this.props.user
                  },
                  clearState: {text: ""}
                })}>
                  <div className="form-group">
                    <textarea className="form-control" name="text" value={this.state.text} placeholder="write comment here..." onChange={e => handleInputChange.call(this, e)} />
                  </div>
                  <input data-testid="comment-submit" className="btn btn-primary tertiary-background" type="submit" value="Post Comment"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default CommentForm