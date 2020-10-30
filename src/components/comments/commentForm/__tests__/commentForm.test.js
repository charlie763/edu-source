import React from 'react'
import ReactDOM from 'react-dom'
import CommentForm from '../CommentForm'
import { BrowserRouter as Router } from 'react-router-dom'
import { addComment } from '../../../../actions/commentActions'
import renderer from 'react-test-renderer'
import {cleanup, fireEvent, render} from '@testing-library/react'

const user = {
  current: {
    id: 1,
    username: 'Charlie'
  },
  valid: true,
  authCompleted: true,
  errors: {}
}

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Router><CommentForm 
    resourceId={1} 
    user={user}
    addComment={addComment}/></Router>, div)
})

it ('matches the snapshot', () => {
  const tree = renderer.create(<Router><CommentForm 
    resourceId={1} 
    user={user}
    addComment={addComment}/></Router>
    ).toJSON()
  expect(tree).toMatchSnapshot()
})

it ('redirects to the resource view once submitted', () => {
  const { getByTestId } = render(
    <Router><CommentForm 
    resourceId={1} 
    user={user}
    addComment={addComment}/></Router>,
  );

  fireEvent.click(getByTestId("comment-submit"));
})

it ('redirects to the resource view if the x is clicked', () => {

})

it ('triggers the addComment action upon submission', () => {
//mock addcomment
//use expect.toBeCalled(mock)
})
