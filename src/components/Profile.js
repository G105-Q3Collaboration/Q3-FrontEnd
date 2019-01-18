import React, { Component } from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'
import axios from 'axios'
const url = process.env.REACT_APP_API_URL

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      account: []
    }
  }

  componentDidMount() {
    this.getAccount()
  }

  getAccount = async () => {
    try {
      const response = await axios.get(`${url}/accounts`)
      const account = await response.data.filter(account => account.username === this.props.match.params.username)
      this.setState({ account: [...account] })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="profile row">
        {
          this.state.account.map(pet =>
          <Sidebar
            key={pet.id}
            id={pet.id}
            username={pet.username}
            profilepic={pet.profilepic}
            bio={pet.bio}
            age={pet.age}
            type={pet.type}
            eatinghabits={pet.eatinghabits}
            quirks={pet.quirks}
          />
          )
        }
        {
          this.state.account.map(pet =>
            <Feed
            key={pet.id}
            id={pet.id}
            username={pet.username}
            user={this.props.user}
          />)
        }
      </div>
    )
  }
}
