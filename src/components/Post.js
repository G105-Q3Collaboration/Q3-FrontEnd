import React, { Component } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { FaEllipsisH, FaTimes } from 'react-icons/fa'
import Reactions from './Reactions'
import AddReaction from './AddReaction'
import Moment from 'react-moment'
import axios from 'axios';
const url = process.env.REACT_APP_API_URL

export default class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expand: false,
      accountid: '',
      reactions: [],
      showErrorMessage: false
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
      const response = await axios.get(`${url}/accounts`)
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
      const reactions = await axios.get(`${url}/accounts/${account.id}/posts/${this.props.id}/reactions`)
      this.setState({ reactions: [...reactions.data] })
    } catch (err) {
      console.log(err)
    }
  }

  addReaction = async (reaction) => {
    try {
      await axios.post(`${url}/accounts/${this.props.loggedinId}/posts/${this.props.id}/reactions`, { reaction })
      this.getReactions()
      this.setState({
        expand: false
      })
    } catch (err) {
      console.log(err)
      this.setState({
        showErrorMessage: true,
        expand: false
      })
      window.setTimeout(() => {
        this.setState({
          showErrorMessage: false
        });
      }, 2000);
    }
  }

  render() {
    return (
      <div className="post border rounded p-0 mb-4">
        <div className="pl-3 controls d-flex justify-content-between align-items-center">
          <p className="username mt-3">{this.props.username} shared a post:<br />
            <small><Moment format="MMM D, YYYY HH:mm" fromNow>{this.props.created_at}</Moment></small>
          </p>
          {this.props.username === this.props.loggedInPerson &&
            <div onClick={() => this.props.deletePost(this.props.id)}
              className="close text-muted m-0 text-right"><FaTimes /></div>}
        </div>
        <p className="lead pl-3 pr-2 mb-0">{ReactHtmlParser(this.props.content)}</p>
        <small className={this.state.showErrorMessage ? "error-handler text-muted" : "error-handler invisible"}>
          You can only react to a post once!
        </small>
        <span className="close add-reaction position-relative text-muted p-2 text-left">
          <FaEllipsisH onClick={this.handleExpand}/>
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
