import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { authorizeUser } from '../actions/userActions'
import { addComment, fetchComments } from '../actions/commentActions'
import CommentForm from '../components/comments/commentForm/CommentForm'
import Comments from '../components/comments/comments/Comments'
import UserContainer from './UserContainer'

class CommentContainer extends React.Component{
  componentDidMount(){
    this.props.fetchComments(this.props.resourceId)
    this.props.authorizeUser()
  }

  componentDidUpdate(prevProps){
    if (prevProps.resourceLoadStatus !== this.props.resourceLoadStatus){
      debugger;
      this.props.fetchComments(this.props.resourceId)
    }
  }

  render(){
    return(
      <>
        <Route exact path={`${this.props.relativePath}/comments/new`} render={props => {
          if (this.props.user.valid){
            return (
              <CommentForm 
                resourceId={this.props.resourceId} 
                user={this.props.user}
                addComment={this.props.addComment}
              />
            )
          } else {
            return (
              <UserContainer previousUrl={`/resources/${this.props.resourceId}`}/>
            )
          }
        }}/>
        <Comments comments={this.props.comments} user={this.props.user} />
      </>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  comments: state.comments.list,
  loadStatus: state.comments.loadStatus,
  resourceLoaded: state.comments.resourceLoaded,
  resourceLoadStatus: state.resources.loadStatus,
  resources: state.resources.list
})

export default connect(mapStateToProps, { authorizeUser, addComment, fetchComments })(CommentContainer)