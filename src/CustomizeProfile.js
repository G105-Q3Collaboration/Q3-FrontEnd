import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CustomizeProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayname: this.props.displayname
    }
  }
  render() {
    return (
      <div className="border rounded p-5 col-sm-8 mt-5 mr-auto ml-auto">
        <h2>Customize Your Profile</h2>
        <form>
          <div className="form-group">
            <label htmlFor="profilepic">Profile Image</label>
            <input type="url" pattern="^(http|https):([/|.|\w|\s|-])*\.(?:jpg|gif|png)" className="form-control" id="profilepic" name="profilepic" placeholder="please enter an image url" required />
          </div>
          <div className="form-group">
            <label htmlFor="displayname">Pet Name</label>
            <input type="text" className="form-control" id="displayname" name="displayname" placeholder="what do your people call you?" value={this.state.displayname} required />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" className="form-control" id="age" name="age" placeholder="how old are you in human years?" required />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Headline</label>
            <textarea className="form-control" rows="2" type="text" name="bio" id="bio" placeholder="some words to live by..."></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="type">What kind of animal are you?</label>
            <input type="text" className="form-control" id="type" name="type" placeholder="cat, dog etc.." required />
          </div>
          <div className="form-group">
            <label htmlFor="eatinghabits">My Favorite Foods</label>
            <textarea className="form-control" rows="4" type="text" name="eatinghabits" id="eatinghabits" placeholder="what kind of food do you eat?"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="quirks">Stuff I Like</label>
            <textarea className="form-control" rows="4" type="text" name="quirks" id="quirks" placeholder="what makes you happy? what kind of games do you like to play?"></textarea>
          </div>
          <button type="submit" className="btn btn-success mr-2">Submit</button>
          <button type="reset" className="btn btn-success mr-2">Start Over</button>
        </form>
      </div>
    )
  }
}
