import React from 'react'

const Playlist = props => {
  const playlist = props.playlists.find(playlist => playlist.id === parseInt(props.match.params.id,10))
  return(
  <div>
    <h2>{playlist.name}</h2>
    {playlist.resources.map(resource => <span>{resource.title}</span>)}
  </div>
)}

export default Playlist