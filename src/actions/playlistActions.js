import * as Cookies from "js-cookie"
const BASE_URL = 'https://edusource-api.herokuapp.com/playlists'

const token = () => Cookies.get("eduResourceSession")

function fetchPlaylists(){
  const configObj = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token()
    }
  }
  return dispatch => {
    dispatch({type: 'LOAD_PLAYLISTS'})
    fetch(BASE_URL, configObj)
      .then(resp => resp.json())
      .then(playlists => dispatch({
        type: "ADD_PLAYLISTS",
        playlists
      }))
  }
}

function addResourceToPlaylist(resourceID, playlistId){
  const configObj = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token()
    },
    body: JSON.stringify({
      update: "add resource",
      resource_id: resourceID,
      id: playlistId
    })
  }
  return dispatch => {
    dispatch({type: "START_ADD", tempPlaylist: {name: "temp", resources: [{id: resourceID}]}})
    fetch(BASE_URL + `/${playlistId}`, configObj)
      .then(resp => resp.json())
      .then(updatedPlaylist => dispatch({
        type: "ADD_RESOURCE_TO_PLAYLIST",
        updatedPlaylist
      }))
  }
}

function removeResourceFromPlaylist(resourceId, playlistId){
  const configObj = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token()
    },
    body: JSON.stringify({
      update: "remove resource",
      resource_id: resourceId,
      id: playlistId
    })
  }
  return dispatch => {
    dispatch({
      type: "REMOVE_RESOURCE_FROM_PLAYLIST",
      resourceId,
      playlistId
    })
    fetch(BASE_URL + `/${playlistId}`, configObj)
  }
}

function addPlaylist(playlist){
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token()
    },
    body: JSON.stringify(playlist)
  }

  return (dispatch) => {
    dispatch({type: "START_ADD", tempPlaylist: playlist})
    fetch(BASE_URL, configObj)
      .then(resp => resp.json())
      .then(respPlaylist => dispatch({
        type: "ADD_PLAYLIST",
        respPlaylist
      }))
  }
}

export { fetchPlaylists, addResourceToPlaylist, addPlaylist, removeResourceFromPlaylist }