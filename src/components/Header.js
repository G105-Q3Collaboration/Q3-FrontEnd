import React, { Component } from 'react'
import { FaUser, FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      search:'',
      posts:[],
      submittedSearch:false
    }
  }

  SignInSignOutButton = () => {
    if (this.props.user) {
      localStorage.removeItem('token')
      this.props.setAuthentication(null)
    }
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
          <div className="container">

            <a className="navbar-brand" href="/">Squeaker!</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse my-2">

              {
                this.props.user ?
                <span className="ml-2 text-white username"> <FaUser /> Welcome, {this.props.user.username} </span>
                :
                <Link className="btn text-white ml-2" to="/">Sign In </Link>
              }

              {
                this.props.user ?
                  <Link className="btn text-white" to="/" onClick={() => this.SignInSignOutButton()}><FaSignInAlt />&nbsp; Sign Out</Link>
                :
                  <Link className="btn text-white" to="/signup"> Sign up </Link>
              }

            </div>
          </div>
        </nav>
      </header>
    )
  }
}