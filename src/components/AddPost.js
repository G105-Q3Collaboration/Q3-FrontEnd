import React, { Component } from 'react'
import { FaImage, FaYoutube, FaBold } from 'react-icons/fa'

export default class AddPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: '',
      posts: []
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    let post = { content: this.state.content }

    this.setState({
      content: '',
    })

    this.props.addPost(post)
  }

  render() {
    return (
      <div className="add-post border p-3 rounded">
        <form onSubmit={this.onSubmit}>
          <textarea className="form-control" rows="4" type="text" name="content" id="content" placeholder="Squeak..." value={this.state.content} onChange={this.onChange}></textarea>
          <div className="controls d-flex justify-content-between align-items-center">
            <div className="post-types">
              <span className="btn text-muted"><FaBold /></span>
              <span className="btn text-muted"><FaImage /></span>
              <span className="btn text-muted"><FaYoutube /></span>
            </div>
            <button className="mt-2 btn btn-success">Add Post</button>
          </div>
        </form>
      </div>
    )
  }
}
