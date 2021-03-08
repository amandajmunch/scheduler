import React, { Component } from 'react';
import Axios from 'axios';
import { MDBInput, MDBCol } from "mdbreact";

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchPage d-flex">
        <MDBCol sm="6">
          <MDBInput hint="Search" type="text" containerClass="mt-0" onChange={this.props.handleChange}/>
        </MDBCol>
        <div className="col-sm-3 form-group">
          <button type="submit" className="btn btn-outline-success" onClick={this.props.handleSubmit}>Search</button>
        </div>

      </div>
    )
  }
}

export default Search;
