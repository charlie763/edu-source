const BASE_URL = 'http://localhost:3000/playlists'

function fetchPlaylists(token){
  return dispatch => {
    dispatch({type: 'LOAD_PLAYLISTS'})
    fetch(BASE_URL + `/?token=${token}`)
      .then(resp => resp.json())
      .then(playlists => dispatch({
        type: "ADD_PLAYLISTS",
        playlists
      }))
  }
}

export { fetchPlaylists }