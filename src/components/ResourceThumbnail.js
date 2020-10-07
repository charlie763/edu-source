import React from 'react'

const ResourceThumbnail = ({ resource }) => {
  return (
    <div>
      <h3>{resource.title}</h3>
      <span>{resource.subject} Grades: {resource.lowerGradeBound} to {resource.upperGradeBound}</span>
      <p>{resource.description}</p>
    </div>
  )
}

export default ResourceThumbnail