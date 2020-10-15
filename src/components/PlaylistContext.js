import React from 'react'
import { displayGrade } from '../utilities'
import Resources from './Resources'
import Resource from './Resource'
import Playlists from './Playlists'

const PlaylistContext = props => {
  switch(props.context){
    case "resources":
      return <Resources resources={props.resources} displayGrade={displayGrade}/>
    case "resource":
      return  <Resource
                match={{url: `/resources/${props.resourceId}`}}
                resource={props.findResource(props.resourceId)} 
                loadStatus={props.loadStatus} 
                displayGrade={displayGrade}
              />
    case "bookshelves":
      return <Playlists 
                playlists={props.playlists}
                match={{path: "bookshelves"}}
            />
    default:
      return <></>
  }
}

export default PlaylistContext