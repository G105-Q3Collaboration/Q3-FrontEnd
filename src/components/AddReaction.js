import React, { Component } from 'react'
import { FaThumbsUp, FaPoop, FaSadCry, FaGrinSquint, FaHeart } from 'react-icons/fa'

export default class AddReaction extends Component {
  constructor(props) {
    super(props)

    this.state = {
      reaction: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

    this.props.addReaction(e.target.value)
  }

  render() {
    return (
      <div className="react border rounded bg-white p-2 position-absolute">
        <input name="reaction" onChange={this.onChange} value="like" type="radio" />
        <span className="text-primary"><FaThumbsUp /></span>

        <input name="reaction" onChange={this.onChange} value="love" type="radio" />
        <span className="text-danger"><FaHeart /></span>

        <input name="reaction" onChange={this.onChange} value="laugh" type="radio" />
        <span className="text-warning"><FaGrinSquint /></span>

        <input name="reaction" onChange={this.onChange} value="cry" type="radio" />
        <span className="text-warning"><FaSadCry /></span>

        <input name="reaction" onChange={this.onChange} value="poop" type="radio" />
        <span className="text-poop"><FaPoop /></span>
      </div>
    )
  }
}
