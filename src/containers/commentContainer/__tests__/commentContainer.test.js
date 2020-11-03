import React from 'react'
import ReactDOM from 'react-dom'
import CommentContainer from '../CommentContainer'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../../../reducers/rootReducer'

it ('renders without crashing', ()=> {
  const div = document.createElement('div')
  const store = createStore(rootReducer, applyMiddleware(thunk))
  ReactDOM.render(<Provider store={store}>
                    <Router>
                      <CommentContainer 
                        relativePath={"/resources/:id"} 
                        resourceId={1} />
                    </Router>
                  </Provider>, div)
})

it ('fetches comments upon rendering', ()=> {

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

