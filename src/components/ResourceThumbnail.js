import React from 'react'
import { Link } from 'react-router-dom'

const ResourceThumbnail = ({ resource, displayGrade }) => {
  return (
    <div>
      <h3>{resource.title}</h3>
      <Link to={{
        pathname: `/resources/playlists/new`,
        context: "resources", 
        state: {resourceId: resource.id}
      }}>
        Add To Playlist
      </Link><br/>
      <span>{resource.subject} Grades: {displayGrade(resource.lowerGradeBound)} to {displayGrade(resource.upperGradeBound)}</span>
      <p>{resource.description}</p>
      <Link to={`/resources/${resource.id}`}>See More</Link>
    </div>
  )
}

export default ResourceThumbnail