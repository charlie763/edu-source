import * as Cookies from "js-cookie"
const BASE_URL = 'http://localhost:3000/playlists'

function fetchPlaylists(){
  const token = Cookies.get("eduResourceSession");
  const configObj = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token
    }
  }
  return dispatch => {
    dispatch({type: 'LOAD_PLAYLISTS'})
    fetch(BASE_URL + `/?token=${token}`, configObj)
      .then(resp => resp.json())
      .then(playlists => dispatch({
        type: "ADD_PLAYLISTS",
        playlists
      }))
  }
}

export { fetchPlaylists }