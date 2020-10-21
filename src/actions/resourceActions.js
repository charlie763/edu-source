const BASE_URL = 'https://edusource-api.herokuapp.com/resources'

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

function fetchResources(subject="all"){
  return (dispatch) => {
    dispatch({type: 'LOAD_RESOURCES'})
    fetch(BASE_URL + `/?q=${subject}`)
      .then(resp => resp.json())
      .then(resources => dispatch({
        type: "ADD_RESOURCES",
        resources
      }))
  }
}

export { addResource, fetchResources }