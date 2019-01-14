import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import CustomizeProfile from './CustomizeProfile';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>

            <div>
              <Header />
              <div className="container">
                <Route exact path="/profile/:username" component={Profile} />
                <Route exact path="/customize/:username" component={CustomizeProfile} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/" component={Login} />
              </div>
            <footer className="text-center mt-5">&copy; 2019. Squeaker!</footer>
            </div>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
