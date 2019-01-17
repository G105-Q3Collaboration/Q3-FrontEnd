import React from 'react'


const FoundProfile = ({profilepic, username, type, age}) => { 
return (
  <div className="sidebar col-sm-4 mt-4">
        <div className="card">
          <img className="card-img-top" src={profilepic} alt="Cat" />
          <div className="card-body center-aligned">
            <h5 className="username card-title mb-0">{username}</h5>
            <small className="initialism text-muted">{type}, {age} years old</small>
            <p className="lead mt-3 mb-0"><a href={`/profile/${username}`}>See Posts</a></p>
          </div>
        </div>
        </div>
)
}

export default FoundProfile

{/* <Link to={`/profile/${username}`} >See Posts</Link>< */}