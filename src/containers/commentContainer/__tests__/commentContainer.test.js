import React from 'react'
import ReactDOM from 'react-dom'
import CommentContainer from '../CommentContainer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../../../reducers/rootReducer'
import { fetchComments } from '../../../actions/commentActions'
import { renderWithStore } from '../../../setupTests'

const mockFns = {
  fetchComments
}

const comments = [
  {
    id: 4,
    text: 'My kids love this!',
    resource_id: 4,
    user_id: 3,
    created_at: '2020-10-21T16:54:41.856Z',
    updated_at: '2020-10-21T16:54:41.856Z',
    user: {
      username: 'Nanibah'
    }
  },
  {
    id: 5,
    text: 'This is a test comment!',
    resource_id: 4,
    user_id: 1,
    created_at: '2020-10-21T16:54:41.856Z',
    updated_at: '2020-10-21T16:54:41.856Z',
    user: {
      username: 'Charlie'
    }
  }
]

const div = document.createElement('div')
const store = createStore(rootReducer, applyMiddleware(thunk))

it ('renders without crashing', ()=> {
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

it ('fetches comments upon rendering', ()=> {
  //fix: need to look at testing redux docs and add mockStore and then connect the mock function because currently the real fn is being connected
  const spy = jest.spyOn(mockFns, "fetchComments")
  // .mockImplementation(() => 
  //     Promise.resolve({
  //       json: () => Promise.resolve(comments)
  //     })
  //   )
  renderWithStore(<Router>
                    <CommentContainer 
                      relativePath={"/resources/:id"} 
                      resourceId={1} />
                  </Router>,
                  { initialState: { comments: {list: [], loadStatus: null, resourceLoaded: null} } }
                  )
  
  // expect(spy).toHaveBeenCalled()
  mockFns.fetchComments.mockRestore()
})

it ('authorizes users upon rendering', ()=> {

})

it ('fetches comments again if the resources loads after the first fetch', ()=> {

})

it ('renders a Comments component', ()=> {

})

describe('new comment routing', ()=> {
  it ('renders a CommentForm component if there is a valid user', ()=> {

  })
  it ('renders a login modal if there is NOT a valid user', ()=> {

  })
})

