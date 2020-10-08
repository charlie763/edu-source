import React from 'react'

const EmbedVideo = videoUrl => {
  let embedUrl;
  if (!!videoUrl.match(/youtube/)){
    const vIdx = videoUrl.indexOf("v=")
    embedUrl = videoUrl.slice(vIdx + 2)
  } else if (!!videoUrl.match(/youtu.be/)) {
    const vIdx = videoUrl.indexOf(".be/")
    embedUrl = videoUrl.slice(vIdx + 4)
  } else {
    return <></>
  }

  return (
    <iframe width="560" height="315" src={`${embedUrl}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  )
}

export default EmbedVideo

// full url: "https://www.youtube.com/watch?v=grnP3mduZkM"
// bitly url: https://youtu.be/WKxf0jeEf8Q

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/WKxf0jeEf8Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}