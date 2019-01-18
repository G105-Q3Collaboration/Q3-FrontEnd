import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from '../utils/request'

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showErrorMessage: false
    }
  }

  handleSignUp = event => {
    event.preventDefault()
    const { displayname, username, password } = event.target

    request('/accounts', 'post', {
      petname: displayname.value,
      username: username.value,
      password: password.value
    })
      .then(response => {
        this.setState({ showErrorMessage: false })
        localStorage.setItem('token', response.data.token)
        return request('/auth/login')
      })
      .then(response => {
        this.props.setAuthentication(response.data)
        this.props.history.push({pathname:`/customize/${username.value}`, state: {id:username.value}})
      })
      .catch(error => {

        console.log(error)
        this.setState({ showErrorMessage: true })
      })
  }

  render() {
    return (
      <div className="border rounded p-5 col-sm-6 mt-5 mr-auto ml-auto">
        <form onSubmit={this.handleSignUp}>
          <div className="form-group">
            <label htmlFor="displayname">Pet Name</label>
            <input type="text" className="form-control" id="displayname" name="displayname" placeholder="enter your pet's name" required />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" name="username" aria-describedby="usernameHelp" placeholder="enter username" required />
            <small id="usernameHelp" className="form-text text-muted">Usernames must be unique!</small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="password" required />
          </div>
          {
            this.state.showErrorMessage &&
            <div className="alert alert-danger">
              Invalid Username or Password
            </div>
          }
          <button type="submit" className="btn btn-outline-info mr-3">Submit</button>
          <Link to="/">Already have an account?</Link>
        </form>
      </div>
    )
  }
}
