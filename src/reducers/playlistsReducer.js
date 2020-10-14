function playlistsReducer(state = {list: [], loadStatus: null, playlistAdded: null}, action){
  switch(action.type){
    case "START_ADD":
      return {
        list: [...state.list],
        loadStatus: state.loadStatus,
        playlistAdded: null
      }
    case "ADD_PLAYLIST":
      const newPlaylist = {
        ...action.playlist,
      }
      return {
        list: [...state.list, newPlaylist],
        loadStatus: state.loadStatus,
        playlistAdded: action.respPlaylist
      }
    case "LOAD_PLAYLISTS":
      return {
        list: [...state.list],
        loadStatus: "pending",
        playlistAdded: state.playlistAdded
      }
    case "ADD_PLAYLISTS":
      return {
        list: [...action.playlists],
        loadStatus: "complete",
        playlistAdded: state.playlistAdded
      }
    default: 
      return state 
  }
}

export default playlistsReducer