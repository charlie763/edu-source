function handleInputChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}

function handleSubmit(submitObj){
  submitObj.e.preventDefault()
  submitObj.callback(submitObj.currentState)
  this.setState({
    ...submitObj.clearState,
    submitted: true
  })
}

function displayGrade(grade){
  return grade === "0" ? "k" : grade
}

function isResourceInPlaylist(resourceId){
  for (const playlist of this.props.playlists){
    for (const resource of playlist.resources){
      if (resource.id === resourceId){
        return true
      }
    }
  }
  return false
}

export { handleInputChange, handleSubmit, displayGrade, isResourceInPlaylist }