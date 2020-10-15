import React from 'react'
import { displayGrade } from '../utilities'
import ResourceThumbnail from './ResourceThumbnail'

const Playlist = props => {
  const playlist = props.playlists.find(playlist => playlist.id === parseInt(props.match.params.id,10))
  return(
  <div>
    <h2>{playlist.name}</h2>
    {playlist.resources.map(resource => 
      <ResourceThumbnail 
        key={resource.id} 
        resource={resource}
        displayGrade={displayGrade}
      />
    )}
  </div>
)}

export default Playlist