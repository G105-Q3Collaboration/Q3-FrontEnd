import React, { Component } from 'react'
import AddPost from './AddPost'
import Post from './Post'
import axios from 'axios'
export default class Feed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      username: '',
      posts : [],
      loading : false
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = () => {
    axios.get('http://localhost:8000/accounts')
    .then(response => {
      let petid = response.data.find(ele => ele.username === this.props.id)
      this.setState({ id: petid.id })
      return petid
    })
    .then(petid => {
      axios.get(`http://localhost:8000/accounts/${petid.id}/posts`)
      .then(posts => {
        this.setState({
          posts: [...posts.data],
          username: this.props.username
        })
      })
    }).catch(error => console.log(error))
  }

  render() {
    return (
      <div className="main col-sm-8 mt-4">
        <AddPost />
        {
          this.state.posts.map(post =>
            <Post
              getPosts={this.getPosts}
              key={post.id}
              username={this.state.username}
              content={post.content}
            />
          )
        }
      </div>
    )
  }
}
