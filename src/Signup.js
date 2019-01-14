import React, { Component } from 'react'

class Signup extends Component {
  render() {
    return (
      <div className="border rounded p-5 col-sm-6 mt-5 mr-auto ml-auto">
        <form>
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
            <input type="password" className="form-control" id="password" name="password" placeholder="password"  required/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}

export default Signup
