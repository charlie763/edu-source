import React from 'react'
import { Link } from 'react-router-dom'

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