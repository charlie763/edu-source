import { combineReducers } from 'redux'
import resourcesReducer from './resourcesReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  resources: resourcesReducer,
  user: usersReducer
})

export default rootReducer