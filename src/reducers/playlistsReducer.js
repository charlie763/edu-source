function playlistsReducer(state = {list: [], loadStatus: null}, action){
  switch(action.type){
    case "ADD_PLAYLIST":
      const newPlaylist = {
        ...action.playlist,
      }
      return {
        list: [...state.list, newPlaylist],
        loadStatus: state.loadStatus
      }
    case "LOAD_PLAYLISTS":
      return {
        list: [...state.list],
        loadStatus: "pending",
      }
    case "ADD_PLAYLISTS":
      return {
        list: [...action.playlists],
        loadStatus: "complete",
      }
    default: 
      return state 
  }
}

export default playlistsReducer