import cuid from 'cuid'

function commentsReducer(state = { list: [], loadStatus: null, resourceLoaded: null}, action){
  switch(action.type){
    case "ADD_COMMENT":
      const newComment = {
        ...action.comment,
        id: cuid()
      }
      return {
        list: [...state.list, newComment],
        loadStatus: state.loadStatus
      }
    case "LOAD_COMMENTS":
      return {
        list: [...state.list],
        loadStatus: "pending",
        resourceLoaded: action.resourceId
      }
    case "ADD_COMMENTS":
      return {
        list: [...action.comments],
        loadStatus: "complete",
        resourceLoaded: state.resourceLoaded
      }
    default: 
      return state 
  }
}

export default commentsReducer