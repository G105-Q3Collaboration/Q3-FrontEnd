import React from 'react'
import { FaThumbsUp, FaPoop, FaSadCry, FaGrinSquint, FaTrash, FaHeart } from 'react-icons/fa'
import Moment from 'react-moment'

const Post = ({ username, content, createdAt, deletePost, postId }) => {
  console.log(postId)
  return (
    <div className="post border rounded p-0 mb-4">
      <div className="pl-3 controls d-flex justify-content-between align-items-center">
        <p className="username mt-3">{username} shared a post:<br/>
          <small><Moment format="MMM D, YYYY" date={createdAt} /></small>
        </p>
        <button onClick={() => deletePost(postId)}className="btn text-muted"><FaTrash /></button>
      </div>
      <p className="lead pl-3 pr-3">{content}</p>
      {/* <img className="card-img-top" src="https://watermarked.cutcaster.com/cutcaster-photo-100067117-Cat-side-profile.jpg" alt="Cat"/> */}
        <div className="reactions p-2">
          <span className="reaction mr-1"><FaPoop /></span>
          <span className="reaction mr-1 text-warning"><FaSadCry /></span>
          <span className="reaction mr-1 text-warning"><FaGrinSquint /></span>
          <span className="reaction mr-1 text-danger"><FaHeart /></span>
          <span className="reaction mr-1 text-info"><FaThumbsUp /></span>&nbsp;
          <small>400 reactions</small>
        </div>
    </div>
  )
}

export default Post
