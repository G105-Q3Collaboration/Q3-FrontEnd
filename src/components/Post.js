import React, { Component } from 'react'
import { FaThumbsUp, FaPoop, FaSadCry, FaGrinSquint, FaTrash, FaHeart } from 'react-icons/fa'
import Moment from 'react-moment'

export default class Post extends Component {
  render() {
    return (
      <div className="post border p-0 mt-4">
        <div className="pl-3 controls d-flex justify-content-between align-items-center">
          <p className="thumb mt-3">Mr. Cat shared a post: <br/>
            <small><Moment format="MMM D, YYYY" date={this.props.createdAt} /></small>
          </p>
          <button className="btn text-muted"><FaTrash /></button>
        </div>
        <p className="lead pl-3 pr-3">Lol i look handsome!</p>
        <img className="card-img-top" src="https://watermarked.cutcaster.com/cutcaster-photo-100067117-Cat-side-profile.jpg" alt="Cat"/>
          <div className="reactions p-2">
            <span className="reaction mr-1"><FaPoop /></span>
            <span className="reaction mr-1 text-warning"><FaSadCry /></span>
            <span className="reaction mr-1 text-warning"><FaGrinSquint /></span>
            <span className="reaction mr-1 text-danger"><FaHeart /></span>
            <span className="reaction mr-1 text-info"><FaThumbsUp /></span>&nbsp;
            <small>400 reactions</small>
          </div>
      </div>
    )
  }
}