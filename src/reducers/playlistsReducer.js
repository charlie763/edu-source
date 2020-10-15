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
        ...action.respPlaylist,
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
    case "REMOVE_RESOURCE_FROM_PLAYLIST":
        const currentPlaylist = state.list.find(playlist => playlist.id === action.playlistId)
        const updatedPlaylist = {
          ...currentPlaylist, 
          resources: currentPlaylist.resources.filter(resource => resource.id !== action.resourceId)
        }
      return {
        list: [...state.list.filter(playlist => playlist.id !== action.playlistId), updatedPlaylist],
        loadStatus: state.loadStatus,
        playlistAdded: state.playlistAdded
      }
    default: 
      return state 
  }
}

export default playlistsReducer