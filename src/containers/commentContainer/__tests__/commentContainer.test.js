import React from 'react'
import ReactDOM from 'react-dom'
import CommentContainer from '../CommentContainer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../../../reducers/rootReducer'
import { renderWithStoreAndRouter } from '../../../setupTests'

const props = {
  relativePath: "/resources/:id", 
  resourceId: 1
}

let store
beforeEach(() => {
  store = createStore(rootReducer, applyMiddleware(thunk))
})

it ('renders without crashing', ()=> {
  const div = document.createElement('div')
  ReactDOM.render(<Provider store={store}>
                    <Router>
                      <CommentContainer 
                        relativePath={"/resources/:id"} 
                        resourceId={1} />
                    </Router>
                  </Provider>, 
                  div
                  )
})

it ('loads comments upon rendering', ()=> {
  expect(store.getState().comments.loadStatus).toBe(null)
  renderWithStoreAndRouter(<CommentContainer {...props}/>, {store: store})
  expect(store.getState().comments.loadStatus).not.toBe(null)
})

it ('authorizes users upon rendering', ()=> {
  expect(store.getState().user.authCompleted).toBe(false)
  renderWithStoreAndRouter(<CommentContainer {...props}/>, {store: store})
  expect(store.getState().user.authCompleted).toBe(true)
})

it ('renders a Comments component', ()=> {
  const { getByTestId } = renderWithStoreAndRouter(<CommentContainer {...props}/>, {store: store})
  expect(getByTestId('comments-wrapper')).toBeDefined()
})

describe('new comment routing', ()=> {
  const initialState = {
    comments: {list: [], loadStatus: null, resourceLoaded: null},
    resources: {list: [], loadStatus: null},
  }
  const route = "/resources/1/comments/new"

  it ('renders a CommentForm component if there is a valid user', ()=> {
    const { getByTestId } = renderWithStoreAndRouter(<CommentContainer {...props}/>, 
      { 
        initialState: {
          ...initialState,
          user: {valid: true}
       },
       route
      }
    )
    expect(getByTestId("comment-form")).toBeDefined()
  })

  it ('renders a login form if there is NOT a valid user', ()=> {
    const { getByTestId } = renderWithStoreAndRouter(<CommentContainer {...props}/>, 
      { 
        initialState: {
          ...initialState,
          user: {valid: false}
       },
       route
      }
    )
    expect(()=> getByTestId("comment-form")).toThrowError()
    expect(getByTestId("login-form")).toBeDefined()
  })
})

