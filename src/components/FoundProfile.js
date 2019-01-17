import React from 'react'

const FoundProfile = ({ profilepic, username, type, age }) => {
  return (
    <div className="profile border card">
      <div className="image-wrapper">
        <img className="card-img-top" src={profilepic} alt={username} />
      </div>
      <div className="card-body">
        <div className="card-title lead username">{username}</div>
        <p className="initialism text-muted">{type}, {age} years old</p>
        <a className="btn-sm btn btn-outline-success m-0" href={`/profile/${username}`}>See Posts</a>
      </div>
    </div>
  )
}

export default FoundProfile
