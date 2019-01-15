import React, { Component } from 'react'
import { FaSearch, FaUser, FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default class Header extends Component {
constructor(props) {
  super(props)
}
  SignInSignOutButton = () => {
    if(this.props.user){
      localStorage.removeItem('token')
      this.props.setAuthentication(null)
    }
    else {
      this.props.history.push("/")
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
              <form className="form-inline my-lg-0 m-auto">
                <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
                <button className="btn btn-success my-2 my-sm-0" type="submit"><FaSearch /></button>
              </form>
              <span>
              {
              this.props.user ?
              <span style={{marginLeft: '5px'}}>
                Welcome, {this.props.user.username}
              </span> : null
            }
              </span>
              <span className="btn text-white" onClick={()=>this.SignInSignOutButton()}>
              {this.props.user ? (<Link className="btn text-white" to="/"><FaSignInAlt />&nbsp; Sign Out</Link>,
              <Link className="btn text-white" to="/signup"><FaUser />&nbsp; Sign up </Link>) :
               (<Link className="btn text-white" to="/"><FaSignInAlt />&nbsp; Sign Out</Link>,
               <Link className="btn text-white" to="/signup"><FaUser />&nbsp; Sign up </Link>) }
            </span>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}
