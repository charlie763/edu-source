import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import CommentForm from '../components/CommentForm'

class CommentContainer extends React.Component{
  render(){
    return(
      <div>
        <Route path={`${this.props.relativePath}/comments/new`}>
          {false ? <CommentForm /> : <Redirect to="/login" />}
        </Route>
      </div>
    )
  }
}

export default CommentContainer