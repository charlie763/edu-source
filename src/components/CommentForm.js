import React from 'react'
import { handleInputChange } from '../utilities'

class CommentForm extends React.Component{
  state = {
    text: ""
  }

  render(){
    return(
      <form>
        <textarea name="text" value={this.state.text} placeholder="write comment here..." onChange={e => handleInputChange.call(this, e)} /><br/>
        <input type="submit" value="Post Comment"/>
      </form>
    )
  }
}

export default CommentForm