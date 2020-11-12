function playlistsReducer(state = {list: [], loadStatus: null, playlistAdded: null, resourceAdded: null}, action){
  switch(action.type){
    case "START_ADD":
      const tempPlaylist = { 
        ...action.tempPlaylist,
        resources: [],
        temp: true }
      return {
        list: [...state.list, tempPlaylist],
        loadStatus: state.loadStatus,
        playlistAdded: null,
        resourceAdded: state.resourceAdded
      }
    
    case "START_RESOURCE_ADD":
      return {
        list: state.list,
        loadStatus: state.loadStatus,
        playlistAdded: state.playlistAdded,
        resourceAdded: null
      }

    case "ADD_PLAYLIST":
      const newPlaylist = {
        ...action.respPlaylist,
      }
      return {
        list: [...state.list.filter(playlist => !playlist.temp), newPlaylist],
        loadStatus: state.loadStatus,
        playlistAdded: action.respPlaylist,
        resourceAdded: state.resourceAdded
      }
    case "LOAD_PLAYLISTS":
      return {
        list: [...state.list],
        loadStatus: "pending",
        playlistAdded: state.playlistAdded,
        resourceAdded: state.resourceAdded
      }
    case "ADD_PLAYLISTS":
      return {
        list: [...action.playlists],
        loadStatus: "complete",
        playlistAdded: state.playlistAdded,
        resourceAdded: state.resourceAdded
      }

    case "ADD_RESOURCE_TO_PLAYLIST":
      const playlist = state.list.find(playlist => playlist.id === action.playlistId)
      const playlistWithResource = {
        ...playlist,
        resources: [...playlist.resources, action.resource]
      }
      return {
        list: [...state.list.filter(playlist => playlist.id !== action.playlistId), playlistWithResource],
        loadStatus: state.loadStatus,
        playlistAdded: state.playlistAdded,
        resourceAdded: action.resource
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
        playlistAdded: state.playlistAdded,
        resourceAdded: state.resourceAdded
      }
    default: 
      return state 
  }
}

export default playlistsReducer