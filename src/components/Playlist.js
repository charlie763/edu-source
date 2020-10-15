import React from 'react'
import { displayGrade } from '../utilities'
import ResourceThumbnail from './ResourceThumbnail'

const Playlist = props => {
  if (!props.loadStatus || props.loadStatus === "pending"){
    return(
      <div>Loading...</div>
    )
  } else if (!props.playlist){
    return(
      <div>Resource Not Found</div>
    )
  } else {
    return(
      <div>
        <h2>{props.playlist.name}</h2>
        {props.playlist.resources.map(resource => 
          <ResourceThumbnail 
            key={resource.id} 
            resource={resource}
            displayGrade={displayGrade}
            playlist={props.playlist}
            removeResourceFromPlaylist={props.removeResourceFromPlaylist}
          />
        )}
      </div>
    )
  }
}

export default Playlist