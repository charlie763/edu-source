let BASE_URL;
if (process.env.NODE_ENV === 'production'){
  BASE_URL = 'https://edusource-api.herokuapp.com/resources'
} else {
  BASE_URL = 'http://localhost:3000/resources'
}

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
    fetch(BASE_URL + `/${resourceId}/comments`)
      .then(resp => resp.json())
      .then(comments => dispatch({ type: "ADD_COMMENTS", comments }))
  }
}

export { addComment, fetchComments }