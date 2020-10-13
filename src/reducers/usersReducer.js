import cuid from 'cuid'

function usersReducer(state = { current: {}, valid: false, authCompleted: false, errors: {} }, action){
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
    case "START_AUTH":
      return {
        current: {...state.current},
        valid: state.valid,
        authCompleted: false,
        erros: {...state.errors}
      }
    case "COMPLETE_AUTH":
      return {
        current: {...state.current},
        valid: state.valid,
        authCompleted: true,
        erros: {...state.errors}
      }
    default:
      return state
  }
}

export default usersReducer