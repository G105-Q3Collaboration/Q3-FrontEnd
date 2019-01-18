import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { FaEllipsisH, FaTimes } from 'react-icons/fa'
import Reactions from './Reactions'
import AddReaction from './AddReaction'
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
      return account
    } catch (err) {
      console.log(err)
    }
  }

  getReactions = async () => {
    try {
      const account = await this.getAccount()
      const reactions = await axios.get(`${url}/${account.id}/posts/${this.props.id}/reactions`)
      // console.log(account);

      this.setState({ reactions: [...reactions.data] })
    } catch (err) {
      console.log(err)
    }
  }

  addReaction = async (reaction) => {
    try {
      const account = await this.getAccount()
      await axios.post(`${url}/${account.id}/posts/${this.props.id}/reactions`, {reaction})
      this.getReactions()
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
        <span className="close add-reaction position-relative text-muted p-2 text-left">
          <FaEllipsisH onClick={this.handleExpand} />
        </span>
        <div className="d-flex justify-content-between align-items-center">
          <Reactions reactions={this.state.reactions} />
          {
            this.state.expand &&
            <AddReaction addReaction={this.addReaction} />
          }
        </div>
      </div>
    )
  }
}
