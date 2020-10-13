function handleInputChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}

function handleSubmit(submitObj){
  submitObj.e.preventDefault()
  submitObj.callback(submitObj.currentState)
  this.setState({
    ...submitObj.clearState
  })
}

function isLoggedIn(){
  this.props.authorizeUser()
  return this.props.user.valid
}

export { handleInputChange, handleSubmit, isLoggedIn }