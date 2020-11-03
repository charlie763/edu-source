import React from 'react'
import ReactDOM from 'react-dom'
import Comments from '../Comments'
import renderer from 'react-test-renderer'

const comments = [
  {
    id: 4,
    text: 'My kids love this!',
    resource_id: 4,
    user_id: 3,
    created_at: '2020-10-21T16:54:41.856Z',
    updated_at: '2020-10-21T16:54:41.856Z',
    user: {
      username: 'Naninbah'
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

it ('renders without crashing', ()=> {
  const div = document.createElement('div')
  ReactDOM.render(<Comments comments={comments}/>, div)
})

it ('matches the snapshot given mocked comments data', ()=> {
  const tree = renderer.create(<Comments comments={comments}/>).toJSON()
  expect(tree).toMatchSnapshot()
})

it ('displays the correct number of comments', ()=> {

})

it ('displays the name of the user who made the comment', ()=> {

})

it ('displays the text of the comment', ()=> {

})