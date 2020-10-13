import cuid from 'cuid'

function commentsReducer(state = { list: [], loadStatus: null}, action){
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
    default: 
      return state 
  }
}

export default commentsReducer