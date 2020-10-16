import React from 'react'
import { Link } from 'react-router-dom'
import { displayGrade } from '../utilities'
import EmbedVideo from './EmbedVideo'
import CommentContainer from '../containers/CommentContainer'

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
        <Link to={{
          pathname: `${props.match.url}/playlists/new`,
          context: `resource`,
          state: {resourceId: props.resource.id}
        }}>
          Add To Bookshelf
        </Link><br/>
        <span>{props.resource.subject} Grades: {displayGrade(props.resource.lowerGradeBound)} to {displayGrade(props.resource.upperGradeBound)}</span>
        <p>{props.resource.description}</p>
        <EmbedVideo videoUrl={props.resource.url} title={props.resource.title}/><br/>
        <Link to={`${props.match.url}/comments/new`}>Comment</Link>
        <CommentContainer 
          relativePath={props.match.path} 
          resourceId={props.resource.id}
        />
      </div>
    )
  }
}

export default Resource