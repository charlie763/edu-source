import React from 'react'

class ResourceForm extends React.Component {
  state = {
    title: "",
    subject: "",
    lowerGradeBound: "",
    upperGradeBound: "",
    url: ""
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <div>
        <h2>Add a Resource</h2>
        <form>
          <label>Title: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/><br />
          <label>Subject: </label>
          <input type="text" name="subject" value={this.state.subject} onChange={this.handleInputChange}/><br /> {/*Change to datalist*/}
          <label>Grade Levels: </label>
          <input type="text" name="lowerGradeBound" value={this.state.lowerGradeBound} onChange={this.handleInputChange}/>
          <span> to </span>
          <input type="text" name="upperGradeBound" value={this.state.upperGradeBound} onChange={this.handleInputChange}/><br />
          <label>Link: </label>
          <input type="text" name="url" value={this.state.url} onChange={this.handleInputChange}/><br />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default ResourceForm

// - Resource
//   - id
//   - title
//   - description
//   - grade level
//   - subject
//   - img url
//   - video embed url?
//   - avg rating
//   - source
//   - user_id