import cuid from 'cuid'

function resourcesReducer(state = {list: [], loadStatus:null}, action){
  switch(action.type){
    case "ADD_RESOURCE":
      const newResource = {
        ...action.resource,
        id: cuid(),
        rating: 0
      }
      return {
        list: [...state.list, newResource],
        loadStatus: state.loadStatus
      }
    case "ADD_RESOURCES":
      return {
        list: [...state.list, ...action.resources],
        loadStatus: "complete",
      }
    case "LOAD_RESOURCES":
      return {
        list: [...state.list],
        loadStatus: "pending"
      }
    default:
      return state
  }
}

export default resourcesReducer