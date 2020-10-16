import React from 'react'
import { Link } from 'react-router-dom'
import { displayGrade } from '../utilities'

const ResourceThumbnail = props => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 classNmae="card-title">{props.resource.title}</h4>
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
    </div>
  )
}

export default ResourceThumbnail