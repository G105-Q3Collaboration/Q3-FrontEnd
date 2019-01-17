import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { FaEllipsisH, FaTimes } from 'react-icons/fa'
import Reactions from './Reactions'
import Moment from 'react-moment'
import axios from 'axios';
const url = 'http://localhost:8000/accounts'

export default class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expand: false,
      accountid: '',
      reactions: []
    }
  }

  componentDidMount() {
    this.getReactions()
  }

  handleExpand = () => {
    this.setState({
      expand: !this.state.expand
    })
  }

  getAccount = async () => {
    try {
      const response = await axios.get(url)
      const account = await response.data.find(account => account.username === this.props.username)
      this.setState({ accountid: account.id })
    } catch (err) {
      console.log(err)
    }
  }

  getReactions = async () => {
    try {
      const account = await this.getAccount()
      const reactions = await axios.get(`${url}/${account}/posts/${this.props.id}/reactions`)
      this.setState({ reactions: [...reactions.data] })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="post border rounded p-0 mb-4">
        <div className="pl-3 controls d-flex justify-content-between align-items-center">
          <p className="username mt-3">{this.props.username} shared a post:<br />
            <small><Moment format="MMM D, YYYY" date={this.props.createdAt} /></small>
          </p>
          {this.props.username === this.props.loggedInPerson &&
            <div onClick={() => this.props.deletePost(this.props.id)}
              className="close text-muted m-0 text-right"><FaTimes /></div>}
        </div>
        <p className="lead pl-3 pr-3">{ReactHtmlParser(this.props.content)}</p>
        {/* <img className="card-img-top" src="https://watermarked.cutcaster.com/cutcaster-photo-100067117-Cat-side-profile.jpg" alt="Cat"/> */}
        <span className="close text-muted p-2 text-left">
          <FaEllipsisH onClick={this.handleExpand} />
        </span>
        <Reactions reactions={this.state.reactions} />
      </div>
    )
  }
}
