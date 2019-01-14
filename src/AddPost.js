import React, { Component } from 'react'
import { FaImage, FaYoutube, FaBold } from 'react-icons/fa'

export default class AddPost extends Component {
  render() {
    return (
      <div className="add-post border p-3 rounded">
        <textarea className="form-control" rows="4" type="text" name="post" id="post" placeholder="What's on your mind?"></textarea>
        <div className="controls d-flex justify-content-between align-items-center">
          <div className="post-types">
            <span className="btn text-muted"><FaBold /></span>
            <span className="btn text-muted"><FaImage /></span>
            <span className="btn text-muted"><FaYoutube /></span>
          </div>
          <button className="mt-2 btn btn-success">Add Post</button>
        </div>
      </div>
    )
  }
}
