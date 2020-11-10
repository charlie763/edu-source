import React from 'react'
import ReactDOM from 'react-dom'
import PlaylistForm from '../ResourcePlaylistForm'

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

it ('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PlaylistForm {...mockProps}/>, div)
})

it ('matches the snapshot', () => {

})

it ('fetches playlists on mounting of component', () => {

})

it ('redirects to the resource page upon submit', () => {

})

it ('triggers the addPlaylist function upon clicking add playlist', () => {

})

it ('passes in a correctly formatted playlist as an argument to addPlaylsit upon add submission', () => {

})

it ('triggers the addResourceToPlaylist function upon submit', () => {
  //both when adding a new playlist
  //and selecting a playlist
})

it ('passes in the correct resource id as an argument to addResourceToPlaylist upon submission', () => {

})

it ('passes in the correct playlist id as an argument to addResourceToPlaylist upon submission', () => {

})