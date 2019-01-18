import React, { Component } from 'react'
import { FaThumbtack, FaHeart, FaChevronUp, FaChevronDown, FaFish } from 'react-icons/fa'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expand: false
    }
  }

  handleAbout = () => {
    this.setState({
      expand: !this.state.expand
    })
  }

  render() {
    return (
      <div className="sidebar col-md-4 mt-4">
        <div className="card">
          <img className="card-img-top" src={this.props.profilepic} alt="Cat" />
          <div className="card-body center-aligned">
            <h5 className="username card-title mb-0">{this.props.username}</h5>
            <small className="initialism text-muted">{this.props.type}, {this.props.age} years old</small>
            <p className="lead mt-3 mb-0">{this.props.bio}</p>
          </div>
        </div>

        <ul className="list-group mt-4">
          <li className="list-group-item justify-content-between align-items-center">
            <FaThumbtack className="text-primary" /> About <span className="username">{this.props.username}</span>
            {
              this.state.expand ?
                <FaChevronDown className="text-muted float-right" onClick={this.handleAbout} />
                :
                <FaChevronUp className="text-muted float-right" onClick={this.handleAbout} />
            }
          </li>

          {
            this.state.expand &&
            <span>
              <li className="list-group-item justify-content-between align-items-center">
                <span className="lead"><FaFish className="text-info" /> My Favorite Food</span>
                <p className="conten mt-2">
                  {this.props.eatinghabits}
              </p>
              </li>

              <li className="list-group-item justify-content-between align-items-center">
                <p className="lead"><FaHeart className="text-danger" /> Quirks About Me</p>
                <p className="conten mt-2">
                  {this.props.quirks}
              </p>
              </li>
            </span>
          }
        </ul>
      </div>
    )
  }
}
