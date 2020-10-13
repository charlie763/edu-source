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
  const interval = window.setInterval(() => {
    if (this.props.user.authCompleted) {
      this.setState({
        loggedIn: this.props.user.valid
      })
      window.clearInterval(interval)
    }
  }, 1000)
}

export { handleInputChange, handleSubmit, isLoggedIn }