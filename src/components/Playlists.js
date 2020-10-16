import React from 'react'
import { Link } from 'react-router-dom'
import bookshelfIcon from '../assets/bookshelf-icon.png'
import addIcon from '../assets/add-icon.png'

const Playlists = props => (
  <>
    <div className="row justify-content-center py-4">
      <h3>{props.user.current.username}'s Playlists</h3>
    </div>
    <div className="row justify-content-center">
      <Link className="mx-4" to={{
        pathname: `${props.match.path}/new`,
        context: "bookshelves"
      }}>
        <h5>
          <img className="icon" src={addIcon} alt="add button"></img>
          <span class="mx-2 primary-text badge">New Playlist</span>
        </h5>
      </Link>
    </div>
    <div className="row justify-content-center">
      {props.playlists.map(playlist => 
        <Link to={`/bookshelves/${playlist.id}`}>
          <div className="card">
            <div className="card-header">
              <h6 className="primary-text">{playlist.name}</h6>
            </div>
            <div className="text-center">
              <img className="card-img-bottom card-img" src={bookshelfIcon} alt="bookshelf icon"></img> 
            </div> 
          </div>
        </Link>
      )}
    </div>
  </>
)

export default Playlists