import cuid from 'cuid'

function usersReducer(state = { current: {}, valid: false, errors: {} }, action){
  switch(action.type){
    case "LOGIN_USER":
      return {
        current: action.user,
        valid: true,
        errors: []
      }
    case "INVALID_USER":
      return {
        current: {},
        valid: false,
        errors: {...action.errors}
      }
    default:
      return state
  }
}

export default usersReducer