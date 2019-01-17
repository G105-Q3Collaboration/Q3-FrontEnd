import React, { Component } from 'react'
// import { FaImage, FaYoutube, FaBold } from 'react-icons/fa'
import ReactQuill from 'react-quill'
export default class AddPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: ''
    }
  }

  handleChange = (value) => {
    this.setState({ content: value })
  }

  modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ]
  }

  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

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
      <div className="add-post border p-3 rounded mb-4">
        <form onSubmit={this.onSubmit}>
          <ReactQuill onChange={this.handleChange} value={this.state.content} modules={this.modules} formats={this.formats}
            placeholder="Squeak..."/>
          {/* <textarea onChange={this.handleChange} className="form-control" rows="4" type="text" name="content" id="content"
            placeholder="Squeak..." value={this.state.content}></textarea> */}
          <div className="controls d-flex justify-content-between align-items-center">
            {/* <div className="post-types">
              <span className="btn text-muted"><FaBold /></span>
              <span className="btn text-muted"><FaImage /></span>
              <span className="btn text-muted"><FaYoutube /></span>
            </div> */}
            <button className="mt-2 btn btn-success text-right">Add Post</button>
          </div>
        </form>
      </div>
    )
  }
}
