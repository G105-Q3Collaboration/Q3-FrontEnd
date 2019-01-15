import React, { Component } from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
          username:'',
          profilepic:'',
          bio:'',
          age:'',
          type:'',
          eatinghabits:'',
          quirks:''
                    }
  axios.get('http://localhost:8000/accounts')
  .then(result => {
    let findThePet = result.data.find(ele => {return ele.username === this.props.location.state.id})

  axios.get(`http://localhost:8000/accounts/${findThePet.id}`)
  .then(result => {const newProfile = result.data[0]
  this.setState({
    username:newProfile.username,
    profilepic: newProfile.profilepic,
    bio: newProfile.bio,
    age:newProfile.age,
    type:newProfile.type,
    eatinghabits:newProfile.eatinghabits,
    quirks:newProfile.quirks
  })
  })
  })
  }

  render() {
    return (
      <div className="profile row">
        <Sidebar username={this.state.username} profilepic={this.state.profilepic} bio={this.state.bio} age={this.state.age} type={this.state.type} eatinghabits={this.state.eatinghabits} quirks={this.state.quirks} />
        <Feed username={this.state.username} id={this.props.location.state.id} />
      </div>
    )
  }
}
