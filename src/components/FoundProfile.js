import React from 'react'

const FoundProfile = ({ profilepic, username, type, age }) => {
  return (
    <div className="media border p-3 mb-3">
      <img className="align-self-start mr-3" src={profilepic} alt={username} />
        <div className="media-body">
          <div className="lead username">{username}</div>
          <p className="initialism text-muted">{type}, {age} years old</p>
          <a className="btn-sm btn btn-outline-success m-0" href={`/profile/${username}`}>See Posts</a>
      </div>
    </div>
  )
}

export default FoundProfile
