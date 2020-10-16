import React from 'react'
import { Link } from 'react-router-dom'
import ResourceThumbnail from './ResourceThumbnail'
import addIcon from '../assets/add-icon.png'

const Resources = props => {
  return (
    <>
      <Link to={`/resources/new`}>
        <h5 className="my-3">
          <img className="icon" src={addIcon} alt="add button"></img>
          <span class="mx-2 primary-text badge">Add Resource</span>
        </h5>
      </Link>
      <div className="card-columns">
        {props.resources.map(resource => <ResourceThumbnail 
          key={resource.id} 
          resource={resource}
          removeResourceFromPlaylist={props.removeResourceFromPlaylist}
          inPlaylist={props.isResourceInPlaylist(resource.id)}
          />
        )}
      </div>
      <span> Icons made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></span>
   </>
  )
}

export default Resources