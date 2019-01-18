import React, { Component } from 'react'
import { FaUser, FaSignInAlt, FaAsterisk } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      posts: [],
      submittedSearch: false
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
          <div className="container mr-auto">
            <a className="navbar-brand" href={!this.props.user ? `/` : `/profile/${this.props.user.username}`}>Squeaker!</a>
            <div className="navbar-right">

              {
                this.props.user ?
                  <span className="ml-2 text-white username"> <FaUser /> Hi {this.props.user.username}! </span>
                  :
                  <Link className="btn text-white ml-2" to="/">Sign In </Link>
              }

              {
                this.props.user ?
                  <span>
                    <Link className="btn text-white" to={`/customize/${this.props.user.username}`}><FaAsterisk />&nbsp; Customize Profile</Link>
                    <Link className="btn text-white" to="/" onClick={() => this.SignInSignOutButton()}><FaSignInAlt />&nbsp; Sign Out</Link>
                  </span>
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
