import React from 'react'
import { Route } from 'react-router-dom'

class CommentContainer extends React.Component{
  render(){
    return(
      <div>
        <Route path={`${this.props.relativePath}/comments/new`}>
          <span>Comment Form</span>
        </Route>
      </div>
    )
  }
}

export default CommentContainer