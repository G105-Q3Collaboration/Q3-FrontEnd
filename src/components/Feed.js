import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddPost from './AddPost'
import Post from './Post'
import axios from 'axios'
import Spinner from 'reactjs-simple-spinner'
const url = 'http://localhost:8000/accounts'
export default class Feed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: '',
      posts : [],
      urlparams: '',
      loggedin: '',
      isLoading: true,
      reactions: []
    }
  }

  componentDidMount() {
    this.getPosts()
  }

  getAccount = async () => {
    try {
      const response = await axios.get(url)
      const account = await response.data.find(user => user.username === this.props.username)
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
        posts: [...posts.data.reverse()],
        isLoading: false
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
    if (this.state.loggedin && this.state.isLoading) {
      return (
      <div className="main col-sm-8 mt-4">
       <Spinner size="massive" lineSize={12} className="center" />
      </div>
      )
    }

    if (!this.state.loggedin && this.state.isLoading) {
      return (
        <div className="main col-sm-8 mt-4 text-center">
          <p className="lead">
            Please <Link to="/">login</Link> to see <span className="username">{this.props.username}'s</span> full profile.
          </p>
        </div>
      )
    }

    return (
      <div className="main col-sm-8 mt-4">
        {
          this.state.loggedin === this.props.username &&
          <AddPost addPost={this.addPost} />
        }
        {
          this.state.loggedin && !this.state.loading && this.state.posts.length > 0 ?
            this.state.posts.map(post =>
              <Post
                getPosts={this.getPosts}
                key={post.id}
                id={post.id}
                username={this.props.username}
                loggedInPerson={this.state.loggedin}
                content={post.content}
                deletePost={this.deletePost}
                // getReactions={this.getReactions}
                reactions={this.state.reactions}
              />
            )
            :
            <p className="lead text-center">
              {
                this.state.loggedin === this.props.username ?
                 <span className="text-muted">you don't have any posts yet</span>
                :
                 <span className="text-muted">{this.props.username} doesn't have any posts yet</span>
              }
            </p>
        }
      </div>
    )
  }
}
