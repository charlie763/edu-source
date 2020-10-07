import React from 'react'

const ResourceThumbnail = ({ resource, displayGrade }) => {
  return (
    <div>
      <h3>{resource.title}</h3>
      <span>{resource.subject} Grades: {displayGrade(resource.lowerGradeBound)} to {displayGrade(resource.upperGradeBound)}</span>
      <p>{resource.description}</p>
    </div>
  )
}

export default ResourceThumbnail