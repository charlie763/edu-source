import React from 'react'
import ReactDOM from 'react-dom'
import CommentForm from '../CommentForm'
import { BrowserRouter as Router } from 'react-router-dom'
import { addComment } from '../../../../actions/commentActions'
import renderer from 'react-test-renderer'
import {cleanup, fireEvent, render} from '@testing-library/react'
import { renderWithRouter } from '../../../../setupTests'

afterEach(cleanup)

const user = {
  current: {
    id: 1,
    username: 'Charlie'
  },
  valid: true,
  authCompleted: true,
  errors: {}
}

const props = {
  resourceId: 1, 
  user,
  addComment
}

const addCommentMock = jest.fn()
const mockedProps = {...props, addComment: addCommentMock}

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Router><CommentForm {...props}/></Router>, div)
})

it ('matches the snapshot', () => {
  const tree = renderer.create(<Router><CommentForm {...props} /></Router>).toJSON()
  expect(tree).toMatchSnapshot()
})

it ('redirects to the resource view once submitted', () => {
  const { getByTestId, history } = renderWithRouter(<CommentForm {...props}/>,);
  fireEvent.click(getByTestId("comment-submit"));
  expect(history.location.pathname).toEqual('/resources/1')
})

it ('redirects to the resource view if the x is clicked', () => {
  const { getByTestId, history } = renderWithRouter(<CommentForm {...props}/>,);
  fireEvent.click(getByTestId("exit-comment-modal"));
  expect(history.location.pathname).toEqual('/resources/1')
})

it ('triggers the addComment action upon submission', () => {
  const { getByTestId } = renderWithRouter(<CommentForm {...mockedProps}/>,);
  fireEvent.click(getByTestId("comment-submit"));
  expect(addCommentMock).toBeCalled()
//mock addcomment
//use expect(mock).toBeCalled()
})

it ('triggers the addComment action with the correct arguments passed in', () => {
  //mock addcomment
  //use expect(mock).toBeCalledWith(args)
})

