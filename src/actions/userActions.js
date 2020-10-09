import { sessionService } from 'redux-react-session'
import * as Cookies from "js-cookie"
const BASE_URL = 'http://localhost:3000/users'

function createUser(user){
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(user)
  }

  return dispatch => {
    fetch(BASE_URL, configObj)
      .then(resp=>resp.json())
      .then(userData => {
        Cookies.remove("session")
        Cookies.set("session", userData.token, { expires: 14 })
        sessionService.saveUser(userData.user)
      })
  }
}

export { createUser }