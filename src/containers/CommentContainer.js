import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { authorizeUser } from '../actions/userActions'
import { addComment, fetchComments } from '../actions/commentActions'
import CommentForm from '../components/CommentForm'
import Comments from '../components/Comments'

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

  findResource = id => {
    return this.props.resources.find(resource => resource.id == id)
  }

  render(){
    return(
      <div>
        <Route exact path={`${this.props.relativePath}/comments/new`}>
          {this.props.user.valid ? 
            <CommentForm 
              resourceId={this.props.resourceId} 
              user={this.props.user}
              addComment={this.props.addComment}
            /> : 
            <Redirect to={{
              pathname: "/login",
              context: "resource",
              state: { resourceId: this.props.resourceId } 
            }}/>
          }
        </Route>
        <Comments comments={this.props.comments} user={this.props.user} />
      </div>
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