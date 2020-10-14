import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

const ResourceThumbnail = ({ resource, displayGrade }) => {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <h3>{resource.title}</h3>
      <Link to={{
        pathname: `${path}/playlists/new`, 
        state: {resourceId: resource.id
      }}}>
        Add To Playlist
      </Link><br/>
      <span>{resource.subject} Grades: {displayGrade(resource.lowerGradeBound)} to {displayGrade(resource.upperGradeBound)}</span>
      <p>{resource.description}</p>
      <Link to={`${url}/${resource.id}`}>See More</Link>
    </div>
  )
}

export default ResourceThumbnail