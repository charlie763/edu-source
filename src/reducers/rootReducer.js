import { combineReducers } from 'redux'
import commentsReducer from './commentsReducer'
import resourcesReducer from './resourcesReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  resources: resourcesReducer,
  comments: commentsReducer,
  user: usersReducer
})

export default rootReducer