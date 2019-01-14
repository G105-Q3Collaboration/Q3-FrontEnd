import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div className="border rounded p-5 col-sm-6 mt-5 mr-auto ml-auto">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Username</label>
            <input type="text" className="form-control" id="username" name="username" aria-describedby="usernameHelp" placeholder="enter username" required/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="password"  required/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}
