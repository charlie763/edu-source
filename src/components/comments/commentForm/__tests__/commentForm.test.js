import React from 'react'
import ReactDOM from 'react-dom'
import CommentForm from '../CommentForm'
import { BrowserRouter as Router } from 'react-router-dom'
import { addComment } from '../../../../actions/commentActions'

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Router><CommentForm 
    resourceId={1} 
    user={{username: "Charlie", id: 1}}
    addComment={addComment}/></Router>, div)
})
