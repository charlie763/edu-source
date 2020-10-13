import React from 'react'
import { Link } from 'react-router-dom'
import EmbedVideo from './EmbedVideo'
import CommentContainer from './CommentContainer'

const Resource = props => {
  if (!props.loadStatus || props.loadStatus === "pending"){
    return(
      <div>Loading...</div>
    )
  } else if (!props.resource){
    return(
      <div>Resource Not Found</div>
    )
  } else {
    return(
      <div>
        <h3>{props.resource.title}</h3>
        <span>{props.resource.subject} Grades: {props.displayGrade(props.resource.lowerGradeBound)} to {props.displayGrade(props.resource.upperGradeBound)}</span>
        <p>{props.resource.description}</p>
        <EmbedVideo videoUrl={props.resource.url} title={props.resource.title}/><br/>
        <Link to={`${props.match.url}/comments/new`}>Comment</Link>
        <CommentContainer />
      </div>
    )
  }
}

export default Resource