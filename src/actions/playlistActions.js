import * as Cookies from "js-cookie"
const BASE_URL = 'http://localhost:3000/playlists'

function fetchPlaylists(){
  let token = Cookies.get("eduResourceSession");
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