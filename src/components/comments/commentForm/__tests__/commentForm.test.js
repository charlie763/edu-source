import React from 'react'
import ReactDOM from 'react-dom'
import CommentForm from '../CommentForm'
import { BrowserRouter as Router } from 'react-router-dom'
import { addComment } from '../../../../actions/commentActions'
import renderer from 'react-test-renderer'

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Router><CommentForm 
    resourceId={1} 
    user={{username: "Charlie", id: 1}}
    addComment={addComment}/></Router>, div)
})

it ('matches the snapshot', () => {
  const tree = renderer.create(<Router><CommentForm 
    resourceId={1} 
    user={{username: "Charlie", id: 1}}
    addComment={addComment}/></Router>
    ).toJSON()
  expect(tree).toMatchSnapshot()
})
