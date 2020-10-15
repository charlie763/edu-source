import React from 'react'
import { Link } from 'react-router-dom'
import { displayGrade } from '../utilities'

const ResourceThumbnail = props => {
  return (
    <div>
      <h3>{props.resource.title}</h3>
      {props.playlist ? 
        <button onClick={() => props.removeResourceFromPlaylist(props.resource.id, props.playlist.id)}>
          Remove
        </button>
        :
        <Link to={{
          pathname: `/resources/playlists/new`,
          context: "resources", 
          state: {resourceId: props.resource.id}
        }}>
          Add To Bookshelf
        </Link>
      }
     <br/>
      <span>{props.resource.subject} Grades: {displayGrade(props.resource.lowerGradeBound)} to {displayGrade(props.resource.upperGradeBound)}</span>
      <p>{props.resource.description}</p>
      <Link to={`/resources/${props.resource.id}`}>See More</Link>
    </div>
  )
}

export default ResourceThumbnail