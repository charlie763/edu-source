import React from 'react'
import ResourceThumbnail from '../../resources/ResourceThumbnail'

const Playlist = props => {
  if (!props.loadStatus || props.loadStatus === "pending"){
    return(
      <div data-testid="playlist-wrapper">Loading...</div>
    )
  } else if (!props.playlist){
    return(
      <div data-testid="playlist-wrapper">Resource Not Found</div>
    )
  } else {
    return(
      <div data-testid="playlist-wrapper">
        <h2 className="my-3">{props.playlist.name}</h2>
        {props.playlist.resources.map(resource => 
          <div data-testid="resource-wrapper" key={resource.id} className="my-2">
            <ResourceThumbnail 
              resource={resource}
              inPlaylist={props.isResourceInPlaylist(resource.id)}
              playlist={props.playlist}
              removeResourceFromPlaylist={props.removeResourceFromPlaylist}
            />
          </div>
        )}
      </div>
    )
  }
}

export default Playlist