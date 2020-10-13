import * as Cookies from "js-cookie"
const BASE_URL = 'http://localhost:3000'

function buildPostObj(user){
  return ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(user)
  })
}

function validateUser(dispatch, userData){
  if (userData.valid === "true"){
    Cookies.remove("eduResourceSession")
    Cookies.set("eduResourceSession", userData.token, { expires: 14 })
    return dispatch({type: "LOGIN_USER", user: userData.user})
  } else {
    return dispatch({type: "INVALID_USER", errors: userData.errorMessages})
  }
}

function createUser(user){
  const configObj = buildPostObj(user)

  return dispatch => {
    fetch(BASE_URL.concat('/users'), configObj)
      .then(resp=>resp.json())
      .then(userData => validateUser(dispatch, userData))
  }
}

function loginUser(user){
  const configObj = buildPostObj(user)

  return dispatch => {
    fetch(BASE_URL.concat('/login'), configObj)
      .then(resp=>resp.json())
      .then(userData => validateUser(dispatch, userData))
  }
}

function authorizeUser(){
  let token = Cookies.get("eduResourceSession");
  return dispatch => {
    if (token){
      const configObj = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token
        }
      }
      fetch(BASE_URL.concat('/authorize'), configObj)
        .then(resp => resp.json())
        .then(authResp => {
          if (authResp.valid === "true"){
            return dispatch({type: "LOGIN_USER", user: authResp.user})
          } else {
            return dispatch({type: "INVALID_USER", errors: {session: "Please login to continue"}})
          }
        })
    } else {
      return dispatch({type: "INVALID_USER", errors: {session: "Please login to continue"}})
    }
    
  }
}

export { createUser, loginUser, authorizeUser }