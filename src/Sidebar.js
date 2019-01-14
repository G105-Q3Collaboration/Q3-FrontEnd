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
          <img className="card-img-top" src="https://watermarked.cutcaster.com/cutcaster-photo-100067117-Cat-side-profile.jpg" alt="Cat" />
          <div className="card-body center-aligned">
            <h5 className="card-title mb-0">Mr. Cat</h5>
            <small className="initialism text-muted">Cat, 8 years old</small>
            <p className="lead mt-3 mb-0">I'm a cat and this is my headline - It has a character limit. TBD</p>
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
            <FaThumbtack className="text-primary" /> About Mr. Cat
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              </li>

              <li className="list-group-item justify-content-between align-items-center">
                <p className="lead"><FaHeart className="text-danger" /> Stuff I Like</p>
                <p className="conten mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              </li>
            </span>
          }
        </ul>
      </div>
    )
  }
}
