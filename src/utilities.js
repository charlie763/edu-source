function handleInputChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}

export { handleInputChange }