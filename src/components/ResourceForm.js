import React from 'react'
import { Redirect } from 'react-router-dom'
import { handleSubmit, displayGrade } from '../utilities'
import '../stylesheets/resources.css'

class ResourceForm extends React.Component {
  static cleanState = {
    title: "",
    subject: "",
    lowerGradeBound: "0",
    upperGradeBound: "12",
    url: "",
    videoUrl: "",
    description: "",
    submitted: false
  }

  state = {
    ...this.constructor.cleanState
  }

  handleInputChange = e => {
    let value;
    if (e.target.name === "lowerGradeBound"){
      if (parseInt(this.state.upperGradeBound, 10) < parseInt(e.target.value, 10)){
        value = this.state.lowerGradeBound
      } else {
        value = e.target.value
      }
    } else if (e.target.name === "upperGradeBound") {
      if (parseInt(this.state.lowerGradeBound, 10) > parseInt(e.target.value, 10)){
        value = this.state.upperGradeBound
      } else {
        value = e.target.value
      }
    } else {
      value = e.target.value
    }
    this.setState({
      [e.target.name]: value
    })
  }

  render(){
    if (this.state.submitted){
      return <Redirect to="/resources"/>
    } else {
      return(
        <div>
          <h2>Add a Resource</h2>
          <form onSubmit={e => handleSubmit.call(this, {
            e, 
            callback: this.props.addResource,
            currentState: this.state,
            clearState: {...this.constructor.cleanState}
          })}>
            <label>Title: </label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/><br />
            <label>Subject: </label>
            <input type="text" name="subject" value={this.state.subject} onChange={this.handleInputChange}/><br /> {/*Change to datalist*/}
            <label>Grade Levels: </label>
            <div className="slider-container">
              <span className="left-label">{displayGrade(this.state.lowerGradeBound)}</span>
              <input type="range" className="slider" name="lowerGradeBound" min="0" max="12" value={this.state.lowerGradeBound} onChange={this.handleInputChange}/>
              <input type="range" className="slider" name="upperGradeBound" min="0" max="12" value={this.state.upperGradeBound} onChange={this.handleInputChange}/>
              <span className="right-label">{displayGrade(this.state.upperGradeBound)}</span>
            </div><br/><br/>
            <label>Link: </label>
            <input type="text" name="url" value={this.state.url} onChange={this.handleInputChange}/><br />
            <label>Embedded Video Link: </label>
            <input type="text" name="videoUrl" value={this.state.videoUrl} onChange={this.handleInputChange}/><br />
            <label>Description: </label>
            <textarea type="text" name="description" value={this.state.description} onChange={this.handleInputChange}/><br />
            <input type="submit"/>
          </form>
        </div>
      )
    }
  }
}

export default ResourceForm
