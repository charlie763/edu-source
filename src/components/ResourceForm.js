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
          <form onSubmit={e => handleSubmit.call(this, {
            e, 
            callback: this.props.addResource,
            currentState: this.state,
            clearState: {...this.constructor.cleanState}
          })}>
            <div className="form-group">
              <label>Title: </label>
              <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
              <label>Subject: </label>
              <input className="form-control" type="text" name="subject" value={this.state.subject} onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
              <label>Grade Levels: </label>
              <div className="slider-container d-block">
                <span className="left-label">{displayGrade(this.state.lowerGradeBound)}</span>
                <input type="range" className="slider" name="lowerGradeBound" min="0" max="12" value={this.state.lowerGradeBound} onChange={this.handleInputChange}/>
                <input type="range" className="slider" name="upperGradeBound" min="0" max="12" value={this.state.upperGradeBound} onChange={this.handleInputChange}/>
                <span className="right-label">{displayGrade(this.state.upperGradeBound)}</span>
              </div>
            </div>
            <div className="form-group">
              <label>Link: </label>
              <input className="form-control" type="text" name="url" value={this.state.url} onChange={this.handleInputChange}/>
            </div>
            <div className="form-group">
              <label>Description: </label>
              <textarea className="form-control" type="text" name="description" value={this.state.description} onChange={this.handleInputChange}/>
            </div>
            <input className="btn btn-primary tertiary-background" type="submit" value="Add Resource"/>
          </form>
        </div>
      )
    }
  }
}

export default ResourceForm
