import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddPost from './AddPost'
import Post from './Post'
import axios from 'axios'
const url = 'http://localhost:8000/accounts'
export default class Feed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      posts : [],
      urlparams: '',
      loggedin: ''
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  getAccount = async () => {
    try {
      let response = await axios.get(url)
      let account = await response.data.find(user => user.username === this.props.username)
      this.setState({
        id: account.id,
        loggedin: this.props.user.username // if i pass this in, you can't see posts when you're logged out
      })
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
        posts: [...posts.data.reverse()]
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

  deletePost = async (id) => {
    try {
      const account = await this.getAccount()
      await axios.delete(`${url}/${account.id}/posts/${id}`)

      this.getPosts()
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="main col-sm-8 mt-4">
        {
          this.state.loggedin === this.props.username &&
          <AddPost addPost={this.addPost} />
        }
        {
          this.state.loggedin ?
          this.state.posts.map(post =>
            <Post
              getPosts={this.getPosts}
              key={post.id}
              id={post.id}
              username={this.props.username}
              loggedInPerson={this.state.loggedin}
              content={post.content}
              deletePost={this.deletePost}
            />
          )
          :
          <div className="oops lead text-center mt-5">
            <h3 className="text-muted">Posts preview is not available right meow</h3>
            <p>
              Please <Link to="/signup">sign-up</Link> to see <span className="username">{this.props.username}'s</span> full profile.
            </p>
          </div>
        }
      </div>
    )
  }
}
