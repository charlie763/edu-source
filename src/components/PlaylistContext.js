import React from 'react'
import { displayGrade } from '../utilities'
import Resources from './Resources'
import Resource from './Resource'

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
    default:
      return <></>
  }
}

export default PlaylistContext