import React from 'react'
import ResourceThumbnail from './ResourceThumbnail'

const Resources = props => {
  return (
    <div>
      {props.resources.map(resource => <ResourceThumbnail resource={resource}/>)}
    </div>
  )
}

export default Resources