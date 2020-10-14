import React from 'react'
import Resources from './Resources'

const PlaylistContext = props => {
  switch(props.context){
    case "resources":
      return <Resources resources={props.resources} displayGrade={props.displayGrade}/>
    default:
      return <></>
  }
}

export default PlaylistContext