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
import { shallow } from 'enzyme'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

Enzyme.configure({ adapter: new Adapter() });

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

let store
beforeEach(() => {
  store = createStore(rootReducer, applyMiddleware(thunk))
})

const div = document.createElement('div')


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
  // const spy = jest.spyOn(CommentContainer, "fetchComments")
  // .mockImplementation(() => 
  //     Promise.resolve({
  //       json: () => Promise.resolve(comments)
  //     })
  //   )
  // const store = mockStore({ 
  //                   comments: {list: [], loadStatus: null, resourceLoaded: null},
  //                   resources: {list: [], loadStatus:null} 
  //                 })
  // const mockFetch = jest.fn()
  // const wrapper = shallow(<CommentContainer 
  //                           relativePath={"/resources/:id"} 
  //                           resourceId={1} 
  //                           store={store}
  //                           fetchComments={mockFetch}
  //                         />
  //                         )
  // const spy = jest.spyOn(wrapper.props().children.props, "fetchComments")
  console.log(store.getState().comments.loadStatus)
  expect(store.getState().comments.loadStatus).toBe(null)
  render(<Provider store={store}>
            <Router>
            <CommentContainer 
              relativePath={"/resources/:id"} 
              resourceId={1}
            />
          </Router>
        </Provider>
        )
  expect(store.getState().comments.loadStatus).not.toBe(null)
  // const wrapper = shallow(<CommentContainer 
  //                       relativePath={"/resources/:id"} 
  //                       resourceId={1} />)
  console.log(store.getState().comments.loadStatus)
  // expect(mockFetch).toHaveBeenCalled()
  // mockFns.fetchComments.mockRestore()
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

