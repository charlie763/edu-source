const BASE_URL = 'http://localhost:3000/resources'

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
    fetch(`${BASE_URL}/${comment.resourceId}/comments`, configObj)
  }
}

function fetchComments(resourceId){
  return dispatch => {
    dispatch({ type: "LOAD_COMMENTS", resourceId })
  }
}

export { addComment, fetchComments }