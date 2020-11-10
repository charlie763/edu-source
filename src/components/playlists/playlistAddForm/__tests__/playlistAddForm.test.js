import React from 'react'
import ReactDOM from 'react-dom'
import PlaylistAddForm from '../PlaylistAddForm'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'

const mockProps = {
  addPlaylist: jest.fn(),
  clearState: {name: ""}
}

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Router><PlaylistAddForm /></Router>, div)
})

it ('matches the snapshot', () => {
  const tree = renderer.create(<Router><PlaylistAddForm {...mockProps}/></Router>).toJSON()
  expect(tree).toMatchSnapshot()
})

it ('redirects to the /bookshelves route after submission if brought up from that route', ()=> {

})

it ('redirects to the /bookshelves route after submission if brought up from that route', ()=> {

})

it ('triggers addPlaylist function on submission', () => {

})

it ('triggers addPlaylist with the correct arguments on submission', () => {

})