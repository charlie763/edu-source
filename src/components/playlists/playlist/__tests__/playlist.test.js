import React from 'react'
import ReactDOM from 'react-dom'
import Playlist from '../Playlist'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() });

const mockProps = {
  playlist: {
    id: 1,
    name: "Default Bookshelf",
    resources: [

    ],
    user_id: 1
  },
  loadStatus: null
  // removeResourceFromPlaylist: this.props.removeResourceFromPlaylist,
  // isResourceInPlaylist: resourceId => isResourceInPlaylist.call(this, resourceId)
}

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Playlist />, div)
})

it ('renders something regardless of whether or not a playlist gets loaded from the api', () => {
  const wrapper = shallow(<Playlist {...mockProps} />)
  expect(wrapper.exists('[data-testid="playlist-wrapper"]')).toBe(true)
  wrapper.setProps({ loadStatus: "pending" })
  expect(wrapper.exists('[data-testid="playlist-wrapper"]')).toBe(true)
  wrapper.setProps({ loadStatus: "complete" })
  expect(wrapper.exists('[data-testid="playlist-wrapper"]')).toBe(true)
  wrapper.setProps({ playlist: null })
  expect(wrapper.exists('[data-testid="playlist-wrapper"]')).toBe(true)
})

it ('matches the snapshot given mocked playlist data', () => {

})

it ('displays the name of the playlist', () => {

})

it ('renders the correct number of resources per the playlist', () => {

})

it ('renders a ResourceThumbnail component per each resource in the playlist', () => {

})