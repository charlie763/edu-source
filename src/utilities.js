function handleInputChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}

// function handleSubmit(e, callback, currentState, clearState){
//   e.preventDefault()
//   callback(currentState)
//   this.setState({
//     ...clearState
//   })
// }

export { handleInputChange }