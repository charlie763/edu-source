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
    Cookies.remove("session")
    Cookies.set("session", userData.token, { expires: 14 })
    return dispatch({type: "LOGIN_USER", user: userData.user, valid: "true"})
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

export { createUser, loginUser }