import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'utils/request.js'

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showErrorMessage: false
    }
  }

  handleSignUp = event => {
    event.preventDefault()

    const { inputPetname, inputUsername, inputPassword } = event.target

    request('/accounts', 'post', {
      petname: inputPetname.value,
      username: inputUsername.value,
      password: inputPassword.value
    })
      .then(response => {
        this.setState({ showErrorMessage: false })

        localStorage.setItem('token', response.data.token)
        return request('/auth/login')
      })
      .then(response => {
        this.props.setAuthentication(response.data)
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ showErrorMessage: true })
      })
  }

  render() {
    return (
      <div className="border rounded p-5 col-sm-6 mt-5 mr-auto ml-auto">
        <form onSubmit={this.handleSignUp}>
          <div className="form-group">
            <label htmlFor="petName">Pet Name</label>
            <input type="text" className="form-control" id="petName" name="petName" placeholder="enter your pet's name" required />
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
          <div className={!this.state.showErrorMessage ? 'login-auth-error login-hide-auth-error' : 'login-auth-error'}>
            Invalid Username or Password
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Signup
