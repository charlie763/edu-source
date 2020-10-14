import React from 'react'
import PlaylistContext from './PlaylistContext'

class PlaylistForm extends React.Component{
  render(){
    return (
      <div>
        PlaylistForm
        <PlaylistContext 
          context={this.props.location.context}
          displayGrade={this.props.displayGrade}
          resources={this.props.resources}   
        />
      </div>
    )
  }
}

export default PlaylistForm