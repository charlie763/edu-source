import * as Cookies from "js-cookie"
const BASE_URL = 'https://edusource-api.herokuapp.com'

function buildPostObj(user){
  return ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(user)
  })
}

function validateUser(dispatch, userData){
  if (userData.valid === "true"){
    Cookies.remove("eduResourceSession")
    Cookies.set("eduResourceSession", userData.token, { expires: 14 })
    dispatch({type: "LOGIN_USER", user: userData.user})
  } else {
    dispatch({type: "INVALID_USER", errors: userData.errorMessages})
  }
  dispatch({type: "COMPLETE_AUTH"})
}

function createUser(user){
  const configObj = buildPostObj(user)

  return dispatch => {
    dispatch({type: "START_AUTH"})
    fetch(BASE_URL.concat('/users'), configObj)
      .then(resp=>resp.json())
      .then(userData => validateUser(dispatch, userData))
  }
}

function loginUser(user){
  const configObj = buildPostObj(user)

  return dispatch => {
    dispatch({type: "START_AUTH"})
    fetch(BASE_URL.concat('/login'), configObj)
      .then(resp=>resp.json())
      .then(userData => validateUser(dispatch, userData))
  }
}

function logoutUser(){
  Cookies.remove("eduResourceSession")
  return dispatch => {
    dispatch({type: "INVALID_USER", errors: "user logged out"})
  }
}

function authorizeUser(){
  let token = Cookies.get("eduResourceSession");
  return dispatch => {
    dispatch({type: "START_AUTH"})
    if (token){
      const configObj = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token
        },
        credentials: 'include'
      }
      fetch(BASE_URL.concat('/authorize'), configObj)
        .then(resp => resp.json())
        .then(authResp => {
          if (authResp.valid === "true"){
            dispatch({type: "LOGIN_USER", user: authResp.user})
          } else {
            dispatch({type: "INVALID_USER", errors: {session: "Please login to continue"}})
          }
          dispatch({type: "COMPLETE_AUTH"})
        })
    } else {
      dispatch({type: "INVALID_USER", errors: {session: "Please login to continue"}})
      dispatch({type: "COMPLETE_AUTH"})
    }
    
  }
}

export { createUser, loginUser, authorizeUser, logoutUser }