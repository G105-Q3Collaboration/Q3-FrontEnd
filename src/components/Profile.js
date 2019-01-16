import React, { Component } from 'react'
import Feed from './Feed'
import Sidebar from './Sidebar'
import axios from 'axios'
const url = 'http://localhost:8000/accounts'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account : []
      // id: '',
      // username: '',
      // profilepic: '',
      // bio: '',
      // age: '',
      // type: '',
      // eatinghabits: '',
      // quirks: ''
    }
    // axios.get('http://localhost:8000/accounts')
    //   .then(result => {
    //     let findThePet = result.data.map(ele => {
    //       console.log(username.id);
    //       console.log(username);
    //       console.log(this.props.location.state.username)
    //       return ele.username === this.props.location.state.username
    //     })

    //     axios.get(`http://localhost:8000/accounts/${findThePet.id}`)
    //     .then(result => {
    //       const newProfile = result.data[0]
    //       this.setState({
    //         username: newProfile.username,
    //         profilepic: newProfile.profilepic,
    //         bio: newProfile.bio,
    //         age: newProfile.age,
    //         type: newProfile.type,
    //         eatinghabits: newProfile.eatinghabits,
    //         quirks: newProfile.quirks
    //       })
    //     })
    //   })
  }

  componentDidMount() {
    this.getAccount()
  }

  getAccount = async () => {
    try {
      let response = await axios.get(url)
      let account = await response.data.filter(account => account.username === this.props.match.params.username)
      console.log(this.props);
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
              index={pet.id}
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
              index={pet.id}
              username={pet.username}
            />
          )
        }

      </div>
    )
  }
}
