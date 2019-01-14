import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import CustomizeProfile from './CustomizeProfile'
// import AuthenticatedRoute from '../higherOrderComponent/AuthenticatedRoute'
import request from '../utils/request'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authentication: {
        pending: true,
        user: null
      }
    }
  }

  setAuthentication = claim => {
    this.setState({
      authentication: {

        pending: false,
        user: claim
      }
    })
  }

  componentDidMount() {
    request('/auth/login')
      .then(response => this.setAuthentication(response.data))
      .catch(err => this.setAuthentication(null))
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
            <div>
              <Header />
              <div className="container">
                <Switch>
                  <Route path="/profile/:username" component={Profile} user={this.state.authentication.user}/>
                  <Route path="/customize/:username" component={CustomizeProfile} user={this.state.authentication.user} />
                  {/* <AuthenticatedRoute path='/customize/:username' component={CustomizeProfile} authentication={this.state.authentication} /> */}
                  <Route path="/signup" component={Signup} />
                  <Route path="/" render={(props) => <Login {...props} setAuthentication={this.setAuthentication}/>} />
                </Switch>
              </div>
            <footer className="text-center mt-5">&copy; 2019. Squeaker!</footer>
            </div>
        </BrowserRouter>
      </div>
    )
  }
}
