import React from 'react'

const Comments = props => (
  <div>
    {props.comments.map(comment => (
      <div>
        <span>{comment.user.username}</span>
        <p>{comment.text}</p>
      </div>
    ))}
  </div>
)

export default Comments