import React, { Component } from 'react'
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
            <button className="mt-2 btn btn-success text-right">Add Post</button>
        </form>
      </div>
    )
  }
}
