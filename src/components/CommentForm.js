import React from 'react'

class CommentForm extends React.Component{
  render(){
    return(
      <form>
        <textarea placeholder="write comment here..."/><br/>
        <input type="submit" value="Post Comment"/>
      </form>
    )
  }
}

export default CommentForm