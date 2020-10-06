import React from 'react'
import { connect } from 'react-redux'
import { addResource } from '../actions/resourceActions'

class ResourceForm extends React.Component {
  static cleanState = {
    title: "",
    subject: "",
    lowerGradeBound: "0",
    upperGradeBound: "12",
    url: "",
    description: ""
  }

  state = {
    ...this.constructor.cleanState
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addResource(this.state)
    this.setState({
      ...this.constructor.cleanState
    })
  }

  displayGrade(grade){
    return grade === "0" ? "k" : grade
  }

  render(){
    return(
      <div>
        <h2>Add a Resource</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Title: </label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/><br />
          <label>Subject: </label>
          <input type="text" name="subject" value={this.state.subject} onChange={this.handleInputChange}/><br /> {/*Change to datalist*/}
          <label>Grade Levels: </label>
          <div className="slider-container">
            <span className="left-label">{this.displayGrade(this.state.lowerGradeBound)}</span>
            <input type="range" className="slider" name="lowerGradeBound" min="0" max="12" value={this.state.lowerGradeBound} onChange={this.handleInputChange}/>
            <input type="range" className="slider" name="upperGradeBound" min="0" max="12" value={this.state.upperGradeBound} onChange={this.handleInputChange}/>
            <span className="right-label">{this.displayGrade(this.state.upperGradeBound)}</span>
          </div><br/><br/>
          <label>Link: </label>
          <input type="text" name="url" value={this.state.url} onChange={this.handleInputChange}/><br />
          <label>Description: </label>
          <textarea type="text" name="description" value={this.state.description} onChange={this.handleInputChange}/><br />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default connect(null, { addResource })(ResourceForm)

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