import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'utils/request.js'

export default class Login extends Component {

    constructor(props) {
      super(props)
      this.state = {
        showErrorMessage: false
      }
    }

    handleLogin = event => {
      event.preventDefault()

      const { inputUsername, inputPassword } = event.target

      request('/auth/login', 'post', {
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
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input type="text" className="form-control" id="username" name="username" aria-describedby="usernameHelp" placeholder="enter username" required />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="password" required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}