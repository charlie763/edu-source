import React from 'react'
import ReactDOM from 'react-dom'
import PlaylistForm from '../ResourcePlaylistForm'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react'
import { renderWithRouter } from '../../../../setupTests'
import Adapter from 'enzyme-adapter-react-16'
import { mount, configure } from 'enzyme'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
configure({ adapter: new Adapter() });

const mockProps = {
  fetchPlaylists: jest.fn(),
  addResourceToPlaylist: jest.fn(),
  addPlaylist: jest.fn(),
  playlists: [
    {
      id: 23,
      name: 'playlist 1',
      user_id: 1,
      resources: [
        {
          id: 1,
          title: 'Algebra Introduction - Basic Overview - Online Crash Course Review Video Tutorial Lessons',
          description: '1 hour video goving over basic algebra as you might learn it in high school',
          lowerGradeBound: 9,
          upperGradeBound: 12,
          subject: 'Math',
          url: 'https://www.youtube.com/watch?v=grnP3mduZkM',
          videoUrl: 'https://www.youtube.com/watch?v=grnP3mduZkM',
          rating: 3
        }
      ]
    },
    {
      id: 24,
      name: 'playlist 2',
      user_id: 1,
      resources: [
        {
          id: 2,
          title: 'Worksheet on Colonial America',
          description: 'Meet the Middle Colonies, which are the present-day states of New York, New Jersey, Delaware and Pennsylvania. What does your child think life was like for colonists in the Middle Colonies? Social studies students will write a descriptive paragraph to show their understanding of life in the Middle Colonies and life in colonial America in general.',
          lowerGradeBound: 6,
          upperGradeBound: 8,
          subject: 'History',
          url: 'https://www.education.com/worksheet/article/middle-colonies/',
          videoUrl: null,
          rating: 2
        }
      ]
    }
  ],
  resources: [
    {
      id: 1,
      title: 'Algebra Introduction - Basic Overview - Online Crash Course Review Video Tutorial Lessons',
      description: '1 hour video goving over basic algebra as you might learn it in high school',
      lowerGradeBound: 9,
      upperGradeBound: 12,
      subject: 'Math',
      url: 'https://www.youtube.com/watch?v=grnP3mduZkM',
      videoUrl: 'https://www.youtube.com/watch?v=grnP3mduZkM',
      rating: 3
    },
    {
      id: 2,
      title: 'Worksheet on Colonial America',
      description: 'Meet the Middle Colonies, which are the present-day states of New York, New Jersey, Delaware and Pennsylvania. What does your child think life was like for colonists in the Middle Colonies? Social studies students will write a descriptive paragraph to show their understanding of life in the Middle Colonies and life in colonial America in general.',
      lowerGradeBound: 6,
      upperGradeBound: 8,
      subject: 'History',
      url: 'https://www.education.com/worksheet/article/middle-colonies/',
      videoUrl: null,
      rating: 2
    }
  ],
  playlistAdded: null
}

afterEach(cleanup)

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PlaylistForm {...mockProps}/>, div)
})

it ('matches the snapshot', () => {
  const tree = renderer.create(<PlaylistForm {...mockProps}/>).toJSON()
  expect(tree).toMatchSnapshot()
})

it ('fetchPlaylists is called on mounting of component', () => {
  render(<PlaylistForm {...mockProps} />)
  expect(mockProps.fetchPlaylists).toBeCalled()
})

describe('submit form functionality', () => {
  let getByTestId, history
  beforeEach(() => {
    ({ getByTestId, history } = renderWithRouter(<PlaylistForm {...mockProps} location={{state: { resourceId: 1 } }} />))
  })

  it ('redirects to the resource page upon submit', async () => {
    const initialRoute = '/resources/playlists/new'
    const wrapper = mount(
      <Router history={createMemoryHistory({ initialEntries: [`${initialRoute}`] })} >
        <PlaylistForm {...mockProps} location={{state: { resourceId: 1 } }} />
      </Router>
    )
    expect(wrapper.prop('history').location.pathname).toEqual(initialRoute)
    wrapper.find(PlaylistForm).setState({submitted: true}) //make assumption about implementation and how component keeps track of submission
    expect(wrapper.prop('history').location.pathname).toEqual('/resources')
  })
  
  it ('triggers the addPlaylist function upon clicking add playlist', () => {
    fireEvent.click(getByTestId('add-playlist-submit'))
    expect(mockProps.addPlaylist).toBeCalled()
  })
  
  it ('passes in a correctly formatted playlist as an argument to addPlaylsit upon add submission', () => {
    const submitState = {
      name: "new playlist",
      resources: [
        {
          id: 1,
          title: 'Algebra Introduction - Basic Overview - Online Crash Course Review Video Tutorial Lessons',
          description: '1 hour video goving over basic algebra as you might learn it in high school',
          lowerGradeBound: 9,
          upperGradeBound: 12,
          subject: 'Math',
          url: 'https://www.youtube.com/watch?v=grnP3mduZkM',
          videoUrl: 'https://www.youtube.com/watch?v=grnP3mduZkM',
          rating: 3
        }
      ]
    }
    fireEvent.change(getByTestId('playlist-name-input'), { target: { value: `${submitState.name}` } })
    fireEvent.click(getByTestId('add-playlist-submit'))
    expect(mockProps.addPlaylist).toBeCalledWith(submitState)
  })

  it ('redirects to resources upon select playlist submit', () => {
    fireEvent.click(getByTestId('select-playlist-submit'))
    expect(history.location.pathname).toBe('/resources')
  })

  it ('triggers the addResourceToPlaylist function upon submit', () => {
    //both when adding a new playlist
    //and selecting a playlist
  })
  
  it ('passes in the correct resource id as an argument to addResourceToPlaylist upon submission', () => {
  
  })
  
  it ('passes in the correct playlist id as an argument to addResourceToPlaylist upon submission', () => {
  
  })
})

