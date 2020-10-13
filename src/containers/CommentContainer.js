import React from 'react'
import { Route } from 'react-router-dom'
import CommentForm from '../components/CommentForm'

class CommentContainer extends React.Component{
  render(){
    return(
      <div>
        <Route path={`${this.props.relativePath}/comments/new`}>
          <CommentForm />
        </Route>
      </div>
    )
  }
}

export default CommentContainer