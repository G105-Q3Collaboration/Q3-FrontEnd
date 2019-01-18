import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div>
      <form onChange={(event) => this.props.handleSearchSubmit(event)} className="form-inline my-lg-0 m-auto">
                <input className="form-control mr-sm-2 searchBar"  name="search" onChange={(event) => this.props.handleChange(event)} type="search" placeholder="Search..." aria-label="Search" value={this.state.search} />
                <button className="btn btn-success my-2 my-sm-0" type="submit"><FaSearch /></button>
      </form>
      </div>
    )
  }
}
