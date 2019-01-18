import React, { Component } from 'react'
import { FaThumbsUp, FaPoop, FaSadCry, FaGrinSquint, FaHeart } from 'react-icons/fa'

export default class AddReaction extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reaction: ''
    }
  }

  onClick = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

    this.props.addReaction(e.target.value)
  }

  render() {
    return (
      <div className="react border rounded bg-white p-2 position-absolute">
        <input name="reaction" onClick={this.onClick} value="like" type="button" />
        <span className="text-primary"><FaThumbsUp /></span>

        <input name="reaction" onClick={this.onClick} value="love" type="button" />
        <span className="text-danger"><FaHeart /></span>

        <input name="reaction" onClick={this.onClick} value="laugh" type="button" />
        <span className="text-warning"><FaGrinSquint /></span>

        <input name="reaction" onClick={this.onClick} value="cry" type="button" />
        <span className="text-warning"><FaSadCry /></span>

        <input name="reaction" onClick={this.onClick} value="poop" type="button" />
        <span className="text-poop"><FaPoop /></span>
      </div>
    )
  }
}
