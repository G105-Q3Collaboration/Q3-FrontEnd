import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Spinner from 'reactjs-simple-spinner'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import CustomizeProfile from './CustomizeProfile'
import Search from './Search'
import request from '../utils/request'
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authentication: {
        pending: true,
        user: null,
        search: false,
        isLoading: true
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
    this.setState({
      isLoading: false
    })

    request('/auth/login')
      .then(response => this.setAuthentication(response.data))
      .catch(err => this.setAuthentication(null))
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="main col-sm-8 mt-4">
          <Spinner size="massive" lineSize={12} className="center" />
        </div>
      )
    }

    return (
      <div className="app">
        <BrowserRouter>
            <div>
              <Header setAuthentication={this.setAuthentication} user={this.state.authentication.user}/>
              <div className="container">

                <Switch>
                  <Route path="/search" render={(props) => <Search {...props}/>} />
                  <Route path="/profile/:username" render={(props) => <Profile {...props} authentication={this.state.authentication} user={this.state.authentication.user} />}  />
                  <Route path="/customize/:username" render={(props) => <CustomizeProfile {...props} authentication={this.state.authentication} user={this.state.authentication.user} />} />
                  <Route path="/signup" render={(props) => <Signup {...props} setAuthentication={this.setAuthentication}/>} />
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
