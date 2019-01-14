import React, { Component } from 'react'
import AddPost from './AddPost'
import Post from './Post'
export default class Feed extends Component {
  render() {
    return (
      <div className="main col-sm-8 mt-4">
        <AddPost />
        <Post />
      </div>
    )
  }
}
