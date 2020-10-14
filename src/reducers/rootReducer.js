import { combineReducers } from 'redux'
import commentsReducer from './commentsReducer'
import resourcesReducer from './resourcesReducer'
import playlistsReducer from './playlistsReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  resources: resourcesReducer,
  playlists: playlistsReducer,
  comments: commentsReducer,
  user: usersReducer
})

export default rootReducer