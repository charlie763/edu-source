import { combineReducers } from 'redux'
import { sessionReducer } from 'redux-react-session'
import resourcesReducer from './resourcesReducer'

const rootReducer = combineReducers({
  resources: resourcesReducer,
  session: sessionReducer
})

export default rootReducer