import React from 'react'
import { Link } from 'react-router-dom'

const Playlists = props => (
  <div>
    <Link to={{
      pathname: `${props.match.path}/new`,
      context: "bookshelves"
    }}>Add New Playlist</Link>
    {props.playlists.map(playlist => 
      <div>
        <Link to={`/bookshelves/${playlist.id}`}>{playlist.name}</Link>  
      </div>
    )}
  </div>
)

export default Playlists