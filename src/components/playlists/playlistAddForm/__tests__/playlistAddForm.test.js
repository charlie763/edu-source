import React from 'react'
import ReactDOM from 'react-dom'
import PlaylistAddForm from '../PlaylistAddForm'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { renderWithRouter } from '../../../../setupTests'
import { cleanup, fireEvent } from '@testing-library/react'

const mockProps = {
  addPlaylist: jest.fn(),
  clearState: {name: ""},
}

afterEach(cleanup)

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Router><PlaylistAddForm /></Router>, div)
})

it ('matches the snapshot', () => {
  const tree = renderer.create(<Router><PlaylistAddForm {...mockProps}/></Router>).toJSON()
  expect(tree).toMatchSnapshot()
})

it ('redirects to the /bookshelves route after submission if brought up from that route', ()=> {
  const { getByTestId, history } = renderWithRouter(<PlaylistAddForm {...mockProps}/>)
  fireEvent.click(getByTestId('add-playlist-submit'))
  expect(history.location.pathname).toBe('/bookshelves')
})

it ('triggers addPlaylist function on submission', () => {
  const { getByTestId } = renderWithRouter(<PlaylistAddForm {...mockProps}/>)
  fireEvent.click(getByTestId('add-playlist-submit'))
  expect(mockProps.addPlaylist).toBeCalled()
})

it ('triggers addPlaylist with the correct arguments on submission', () => {
  const submitState = {
    name: "new playlist",
    submitted: false
  }
  const { getByTestId } = renderWithRouter(<PlaylistAddForm {...mockProps}/>)
  fireEvent.change(getByTestId('add-playlist-input'), { target: { value: `${submitState.name}` } })
  fireEvent.click(getByTestId('add-playlist-submit'))
  expect(mockProps.addPlaylist).toBeCalledWith(submitState)
})