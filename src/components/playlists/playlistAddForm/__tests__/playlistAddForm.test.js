import React from 'react'
import ReactDOM from 'react-dom'
import PlaylistAddForm from '../PlaylistAddForm'
import { BrowserRouter as Router } from 'react-router-dom'

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Router><PlaylistAddForm /></Router>, div)
})

it ('matches the snapshot', () => {

})

it ('redirects to the /bookshelves route after submission if brought up from that route', ()=> {

})

it ('redirects to the /bookshelves route after submission if brought up from that route', ()=> {

})

it ('triggers addPlaylist function on submission', () => {

})

it ('triggers addPlaylist with the correct arguments on submission', () => {

})