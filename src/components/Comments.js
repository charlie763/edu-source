import React from 'react'

const Comments = props => (
  <div>
    <ul className="list-group-flush">
      {props.comments.map(comment => (
        <li className="list-group-item">
          <h5>{comment.user.username}</h5>
          <p>{comment.text}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default Comments