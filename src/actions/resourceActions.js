function addResource(resource){
  return (dispatch) => {
    dispatch({
      type: "ADD_RESOURCE",
      resource
    })
  }
}

export { addResource }