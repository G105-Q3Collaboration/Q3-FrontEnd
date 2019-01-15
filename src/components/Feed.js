import React, { Component } from 'react'
import AddPost from './AddPost'
import Post from './Post'
import axios from 'axios'
export default class Feed extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      id:''
    }

  axios.get('http://localhost:8000/accounts')
  .then(result => {
    let findThePet = result.data.find(ele => {return ele.username === this.props.id})
    this.setState({
      id:findThePet.id
    })
  })
  
}

    render() {
    return (
      <div className="main col-sm-8 mt-4">
        <AddPost />
        <Post />
      </div>
    )
  }
}
