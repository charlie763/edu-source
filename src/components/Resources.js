import React from 'react'
import ResourceThumbnail from './ResourceThumbnail'

const Resources = props => {
  return (
    <div>
      {this.props.resources.map(resource => <ResourceThumbnail resource={resource}/>)}
    </div>
  )
}

export default Resources