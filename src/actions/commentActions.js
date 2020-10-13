const BASE_URL = 'http://localhost:3000/comments'

function addComment(comment){
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(comment)
  }

  return dispatch => {
    dispatch({type: "ADD_COMMENT", comment})
    fetch(BASE_URL, configObj)
  }
}

export { addComment }