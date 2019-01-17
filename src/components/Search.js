import React, { Component } from 'react'
import { FaSearch } from 'react-icons/fa'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className="search p-0 mb-3">
        <form onSubmit={(event) => this.props.handleSearchSubmit(event)} className="d-flex m-auto">
          <input className="form-control mr-2 searchBar"  name="search" onChange={(event) => this.props.handleChange(event)} type="search" placeholder="Search..." aria-label="Search for your friends..." value={this.state.search} />
          <button className="btn btn-success my-sm-0" type="submit"><FaSearch /></button>
        </form>
      </div>
    )
  }
}
