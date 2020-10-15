import React from 'react'

const Playlists = props => (
  <div>
    {props.playlists.map(playlist => 
      <div>
        <Link to={`${props.match.path}/${playlist.id}`}>{playlist.name}</Link>  
      </div>
    )}
  </div>
)

export default Playlists