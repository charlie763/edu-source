import React from 'react'

class CommentForm extends React.Component{
  state = {
    text: ""
  }
  
  render(){
    return(
      <form>
        <textarea name="text" value={this.state.text} placeholder="write comment here..."/ ><br/>
        <input type="submit" value="Post Comment"/>
      </form>
    )
  }
}

export default CommentForm