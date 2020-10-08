import React from 'react'

const Resource = ({ resource, loadStatus }) => {
  if (!loadStatus || loadStatus === "pending"){
    return(
      <div>Loading...</div>
    )
  } else if (!resource){
    return(
      <div>Resource Not Found</div>
    )
  } else {
    return(
      <div>{resource.title}</div>
    )
  }
}

export default Resource