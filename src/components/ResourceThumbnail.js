import React from 'react'
import { Link } from 'react-router-dom'
import { displayGrade } from '../utilities'

const ResourceThumbnail = props => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="row justify-content-between">
          <div>
            <span className="badge badge-primary badge-pill">{props.resource.subject}</span> 
            <span className="badge badge-secondary badge-pill">Grades: {displayGrade(props.resource.lowerGradeBound)}-{displayGrade(props.resource.upperGradeBound)}</span>
          </div>
          <div>
            {props.inPlaylist ? 
              <button className="non-button" onClick={() => props.removeResourceFromPlaylist(props.resource.id, props.playlist.id)}>
                <svg height="1rem" viewBox="-110 -18 581 581.33331" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="m181.25 363.109375 172.75 181.890625v-545h-360v545l172.75-181.890625c1.886719-1.984375 4.511719-3.113281 7.25-3.113281s5.359375 1.128906 7.25 3.113281zm0 0"/></svg>
              </button>
              :
              <Link to={{
                pathname: `/resources/playlists/new`,
                context: "resources", 
                state: {resourceId: props.resource.id}
              }}>
                <svg height="1rem" viewBox="-161 -27 859 859.3038" width="1rem" xmlns="http://www.w3.org/2000/svg"><path d="m514.824219 805.585938c-3.605469 0-7.140625-1.453126-9.726563-4.179688l-245.371094-258.277344-245.371093 258.277344c-3.792969 4-9.628907 5.273438-14.710938 3.226562-5.109375-2.03125-8.453125-6.972656-8.453125-12.46875v-765.3125c0-14.808593 12.046875-26.851562 26.855469-26.851562h483.351563c14.804687 0 26.855468 12.042969 26.855468 26.851562v765.308594c0 5.496094-3.34375 10.441406-8.441406 12.472656-1.617188.640626-3.308594.953126-4.988281.953126zm-255.097657-295.378907c3.671876 0 7.195313 1.507813 9.730469 4.179688l231.941407 244.144531v-731.679688h-483.351563v731.679688l231.941406-244.144531c2.535157-2.671875 6.058594-4.179688 9.738281-4.179688zm0 0"/></svg>
              </Link>
            }
          </div>
        </div>
      </div>
      <div className="card-body">
        <h4 classNmae="card-title">{props.resource.title}</h4>
      <br/>
        <p>{props.resource.description}</p>
        <Link className="btn btn-primary tertiary-background" to={`/resources/${props.resource.id}`}>See More</Link>
      </div>
    </div>
  )
}

export default ResourceThumbnail