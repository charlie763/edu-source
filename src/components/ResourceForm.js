import React from 'react'

class ResourceForm extends React.Component {
  state = {
    title: "",
    subject: "",
    grades: [],
    url: ""
  }
  render(){
    return(
      <div>
        <h2>Add a Resource</h2>
        <form>
          <label>Title: </label>
          <input type="text" name="title" value={this.state.title} /><br />
          <label>Subject: </label>
          <input type="text" name="subject" value={this.state.subject} /><br /> {/*Change to datalist*/}
          <label>Grade Levels: </label>
          <input type="text" name="grades" value={this.state.grades} /><br /> {/*Change to multiple select*/}
          <label>Link: </label>
          <input type="text" name="url" value={this.state.url} /><br />
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