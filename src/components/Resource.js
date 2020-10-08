import React from 'react'
import EmbedVideo from './EmbedVideo'

const Resource = ({ resource, loadStatus, displayGrade }) => {
  if (!loadStatus || loadStatus === "pending"){
    return(
      <div>Loading...</div>
    )
  } else if (!resource){
    return(
      <div>Resource Not Found</div>
    )
  } else {
    return(
      <div>
        <h3>{resource.title}</h3>
        <span>{resource.subject} Grades: {displayGrade(resource.lowerGradeBound)} to {displayGrade(resource.upperGradeBound)}</span>
        <p>{resource.description}</p>
        <EmbedVideo videoUrl={resource.url} title={resource.title}/>
      </div>
    )
  }
}

export default Resource