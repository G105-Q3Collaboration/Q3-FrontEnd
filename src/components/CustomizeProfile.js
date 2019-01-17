import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import request from '../utils/request'

export default class CustomizeProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayname: this.props.displayname,
      profilepic: ''
    }
  }

  handleCustomize = event => {
    event.preventDefault()
    if (!this.state.profilepic) {
      this.setState({
        profilepic: 'http://res.cloudinary.com/squeaker/image/upload/v1547767064/sbzqwitvw02zyjwzgrld.jpg'
      })
    }

    const { displayname, age, bio, type, eatinghabits, quirks } = event.target

    request(`/accounts/${this.props.user.id}`, 'put', {
      profilepic: this.state.profilepic,
      displayname: displayname.value,
      age: age.value,
      bio: bio.value,
      type: type.value,
      eatinghabits: eatinghabits.value,
      quirks: quirks.value
    })
      .then(response => {
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

  onDrop = (acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader()
      reader.onload = () => {
        request(`/accounts/${this.props.user.id}/avatar`, 'post', {
          image: reader.result
        })
          .then(result => {
            this.setState({ profilepic: result.data.image })

          })
          .catch(error => console.log(error))
      }
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')

      reader.readAsDataURL(file)
    })
  }

  render() {
    return (
      <div className="border rounded p-5 col-sm-8 mt-5 mr-auto ml-auto">
        <h2>Customize Your Profile</h2>
        <form onSubmit={this.handleCustomize}>

          <label htmlFor="profilepic">Profile Image</label>
          <br />
          <Dropzone onDrop={this.onDrop} id='profilepic' name='profilepic'>
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  className={('dropzone', { 'dropzone--isActive': isDragActive })}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p> Upload a profile image by dropping file here...</p> :
                      <p>Upload a profile image by dropping file here, or click to select file.</p>
                  }
                </div>
              )
            }}
          </Dropzone>

          <div className="form-group">
            <label htmlFor="displayname">Pet Name</label>
            <input
              type="text"
              className="form-control" id="displayname" name="displayname"
              placeholder="what do your people call you?" value={this.state.displayname} />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control" id="age" name="age"
              placeholder="how old are you in human years?" />
          </div>

          <div className="form-group">
            <label htmlFor="bio">Headline</label>
            <textarea
              type="text" rows="2"
              className="form-control" id="bio" name="bio"
              placeholder="some words to live by...">
            </textarea>
          </div>

          <div className="form-group">
            <label htmlFor="type">What kind of animal are you?</label>
            <input
              type="text"
              className="form-control" id="type" name="type"
              placeholder="cat, dog etc.." />
          </div>

          <div className="form-group">
            <label htmlFor="eatinghabits">My Favorite Foods</label>
            <textarea
              type="text" rows="4"
              className="form-control" id="eatinghabits" name="eatinghabits"
              placeholder="what kind of food do you eat?">
            </textarea>
          </div>

          <div className="form-group">
            <label htmlFor="quirks">Stuff I Like</label>
            <textarea
              type="text" rows="4"
              className="form-control" id="quirks" name="quirks"
              placeholder="what makes you happy? what kind of games do you like to play?">
            </textarea>
          </div>

          <button type="submit" className="btn btn-success mr-2">Submit</button>
          <button type="reset" className="btn btn-success mr-2">Start Over</button>

        </form>
      </div >
    )
  }
}
