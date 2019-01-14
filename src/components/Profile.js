import React, { Component } from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <div className="profile row">
        <Sidebar />
        <Feed />
      </div>
    )
  }
}
