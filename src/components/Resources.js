import React from 'react'
import ResourceThumbnail from './ResourceThumbnail'

const Resources = props => {
  return (
    <>
      <div className="card-columns">
        {props.resources.map(resource => <ResourceThumbnail 
          key={resource.id} 
          resource={resource}
          />
        )}
      </div>
      <span> Icons made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></span>
   </>
  )
}

export default Resources