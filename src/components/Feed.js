import React, { Component } from 'react'
import AddPost from './AddPost'
import Post from './Post'
import axios from 'axios'
const url = 'http://localhost:8000/accounts'
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

  getAccount = async () => {
    try {
      let response = await axios.get(url)
      let account = await response.data.find(ele => ele.username === this.props.id)
      this.setState({ id: account.id })
      return account
    } catch(err) {
      console.log(err)
    }
  }

  getPosts = async () => {
    try {
      const account = await this.getAccount()
      const posts = await axios.get(`${url}/${account.id}/posts`)
      this.setState({
        posts: [...posts.data.reverse()],
        username: this.props.username
      })
    } catch (err) {
      console.log(err)
    }
  }

  addPost = async (post) => {
    try {
      const account = await this.getAccount()
      await axios.post(`${url}/${account.id}/posts`, post)
      this.getPosts()
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="main col-sm-8 mt-4">
        {
          this.state.username &&
          <AddPost addPost={this.addPost} />
        }
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
