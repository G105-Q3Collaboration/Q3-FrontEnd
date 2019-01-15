import React, { Component } from 'react'
import { FaThumbtack, FaHeart, FaChevronUp, FaChevronDown, FaFish } from 'react-icons/fa'

export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: false
    }
  }

  handleAbout = () => {
    this.setState({
      collapse: !this.state.collapse
    })
  }

  render() {
    return (
      <div className="sidebar col-sm-4 mt-4">
        <div className="card">
          <img className="card-img-top" src={this.props.profilepic} alt="Cat" />
          <div className="card-body center-aligned">
            <h5 className="card-title mb-0">{this.props.username}</h5>
            <small className="initialism text-muted">{this.props.type}, {this.props.age} years old</small>
            <p className="lead mt-3 mb-0">{this.props.bio}</p>
          </div>
        </div>

        <ul className="profile-stats list-group mt-4">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Interactions
            <span className="badge badge-success badge-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Posts
            <span className="badge badge-success badge-pill">2</span>
          </li>
        </ul>

        <ul className="list-group mt-4">
          <li className="list-group-item justify-content-between align-items-center">
            <FaThumbtack className="text-primary" /> About {this.props.username}
            {
              this.state.collapse ?
                <FaChevronDown className="text-muted float-right" onClick={this.handleAbout} />
                :
                <FaChevronUp className="text-muted float-right" onClick={this.handleAbout} />
            }
          </li>

          {
            this.state.collapse &&
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
