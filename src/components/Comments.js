import React from 'react'

const Comments = props => (
  <div className="my-3">
    <h5>Comments:</h5>
    <ul className="list-group-flush px-0">
      {props.comments.map(comment => (
        <li className="list-group-item quartinary-background pt-3">
          <h6 className="card-subtitle text-muted">{comment.user.username ? comment.user.username : props.user.current.username}: </h6>
          <span>{comment.text}</span>
        </li>
      ))}
    </ul>
  </div>
)

export default Comments