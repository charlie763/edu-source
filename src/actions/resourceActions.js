const BASE_URL = 'http://localhost:3000/resources'

function addResource(resource){
  const configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(resource)
  }

  return (dispatch) => {
    dispatch({
      type: "ADD_RESOURCE",
      resource
    })
    fetch(BASE_URL, configObj)
  }
}

export { addResource }