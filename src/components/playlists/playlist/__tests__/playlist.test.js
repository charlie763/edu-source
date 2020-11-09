import React from 'react'
import ReactDOM from 'react-dom'
import Playlist from '../Playlist'
import { BrowserRouter as Router } from 'react-router-dom'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react'
import { renderWithRouter } from '../../../../setupTests'
import '@testing-library/jest-dom/extend-expect'
import ResourceThumbnail from '../../../resources/ResourceThumbnail'

configure({ adapter: new Adapter() });

const mockProps = {
  playlist: {
    id: 1,
    name: "Default Bookshelf",
    resources: [
      {
        title: "Photosynthesis | Educational Video for Kids",
        description: "Photosynthesis is a process used by plants and other organisms to convert light energy into chemical energy that can later be released to fuel the organisms' activities. This chemical energy is stored in carbohydrate molecules, such as sugars, which are synthesized from carbon dioxide and water – hence the name photosynthesis, from the Greek phōs (φῶς), light, and sunthesis (σύνθεσις), putting together.[1][2][3] In most cases, oxygen is also released as a waste product. Most plants, most algae, and cyanobacteria perform photosynthesis; such organisms are called photoautotrophs. Photosynthesis is largely responsible for producing and maintaining the oxygen content of the Earth's atmosphere, and supplies most of the energy necessary for life on Earth.",
        lowerGradeBound: 0,
        upperGradeBound: 5,
        url: "https://www.youtube.com/watch?v=UPBMG5EYydo",
        subject: "Biology",
        rating: 4,
        id: 1 
      },
      {
        title: "Instructions for Science Volcano",
        lowerGradeBound: 3,
        upperGradeBound: 8,
        url: "https://www.wikihow.com/Make-a-Volcano",
        subject: "Science",
        rating: 5,
        id: 2 
      }
    ],
    user_id: 1
  },
  loadStatus: null,
  isResourceInPlaylist: jest.fn().mockImplementation(() => true),
  removeResourceFromPlaylist: jest.fn()
}

afterEach(cleanup)

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
  const tree = renderer.create(<Router>
      <Playlist {...mockProps} loadStatus={"complete"} />
    </Router>
    )
  expect(tree).toMatchSnapshot()
})

it ('displays the name of the playlist', () => {
  const { getByTestId } = renderWithRouter(<Playlist {...mockProps} loadStatus={"complete"}/>)
  expect(getByTestId('playlist-wrapper')).toHaveTextContent('Default Bookshelf')
})

it ('renders the correct number of resources per the playlist', () => {
  const { queryAllByTestId } = renderWithRouter(<Playlist {...mockProps} loadStatus={"complete"}/>)
  expect(queryAllByTestId('resource-wrapper')).toHaveLength(2)
})

it ('renders a ResourceThumbnail component per each resource in the playlist', () => {
  const wrapper = shallow(<Playlist {...mockProps} loadStatus={"complete"}/>)
  expect(wrapper.find(ResourceThumbnail)).toHaveLength(2)
})