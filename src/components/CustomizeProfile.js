import React, { Component } from 'react'
import request from '../utils/request'

export default class CustomizeProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayname: this.props.displayname,
      profilepic: '',
      age: '',
      bio: '',
      type: '',
      eatinghabits: '',
      quirks: ''
    }
  }

  onChange = (e) => {
    console.log(this.props);

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCustomize = event => {
    event.preventDefault()
    // const { profilepic, displayname, age, bio, type, eatinghabits, quirks } = event.target
    const body = {
      profilepic: this.state.profilepic,
      displayname: this.state.displayname,
      age: this.state.age,
      bio: this.state.bio,
      type: this.state.type,
      eatinghabits: this.state.eatinghabits,
      quirks: this.state.quirks
    }

    request(`/accounts/${this.props.user.id}`, 'put', body)
    .then(response => {
      this.setState({
        profilepic: '',
        age: '',
        bio: '',
        type: '',
        eatinghabits: '',
        quirks: ''
      })
      this.props.history.push({
        pathname: `/profile/${this.props.user.username}`,
        state: { username: this.props.user.username }
      })
    })
    .catch(error => {
      console.log(error)
      this.setState({ showErrorMessage: true })
    })
  }
  render() {
    return (
      <div className="border rounded p-5 col-sm-8 mt-5 mr-auto ml-auto">
        <h2>Customize Your Profile</h2>
        <form onSubmit={this.handleCustomize}>

          <div className="form-group">
            <label htmlFor="profilepic">Profile Image</label>
            <input
              type="url"
              pattern="^(http|https):([/|.|\w|\s|-])*\.(?:jpg|gif|png)"
              className="form-control" id="profilepic" name="profilepic"
              placeholder="please enter an image url" onChange={this.onChange} value={this.state.profilepic}/>
          </div>

          <div className="form-group">
            <label htmlFor="displayname">Pet Name</label>
            <input
              type="text"
              className="form-control" id="displayname" name="displayname"
              placeholder="what do your people call you?" onChange={this.onChange} value={this.state.displayname} />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control" id="age" name="age"
              placeholder="how old are you in human years?" onChange={this.onChange} value={this.state.age} />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Headline</label>
            <textarea
              type="text" rows="2"
              className="form-control" id="bio" name="bio"
              placeholder="some words to live by..." onChange={this.onChange} value={this.state.bio}>
            </textarea>
          </div>

          <div className="form-group">
            <label htmlFor="type">What kind of animal are you?</label>
            <input
              type="text"
              className="form-control" id="type" name="type"
              placeholder="cat, dog etc.." onChange={this.onChange} value={this.state.type} />
          </div>

          <div className="form-group">
            <label htmlFor="eatinghabits">My Favorite Foods</label>
            <textarea
              type="text" rows="4"
              className="form-control" id="eatinghabits" name="eatinghabits"
              placeholder="what kind of food do you eat?" onChange={this.onChange} value={this.state.eatinghabits}>
            </textarea>
          </div>

          <div className="form-group">
            <label htmlFor="quirks">Stuff I Like</label>
            <textarea
              type="text" rows="4"
              className="form-control" id="quirks" name="quirks"
              placeholder="what makes you happy? what kind of games do you like to play?" onChange={this.onChange} value={this.state.quirks}>
            </textarea>
          </div>

          <button type="submit" className="btn btn-success mr-2">Submit</button>
          <button type="reset" className="btn btn-success mr-2">Start Over</button>

        </form>
      </div>
    )
  }
}
