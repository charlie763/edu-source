import React from 'react'
import ResourceThumbnail from './ResourceThumbnail'

const Resources = props => {
  return (
    <div className="card-columns">
      {props.resources.map(resource => <ResourceThumbnail 
        key={resource.id} 
        resource={resource}
        />
      )}
    </div>
  )
}

export default Resources