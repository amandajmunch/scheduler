import React, { Component } from 'react';
import Axios from 'axios';
import { MDBInput, MDBCol } from "mdbreact";

class Search extends Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(e) {
  //   this.setState({ search: e.target.value });
  //   console.log(this.state.search);
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //     Axios.get(`http://localhost:8080/appointments/search/${this.state.search}`)
  //       .then(response => {
  //         console.log(response.data);
  //         this.setState({
  //           results: response.data
  //         })
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       })
  // }

  render() {
    return (
      <div className="searchPage d-flex">
        <MDBCol md="6">
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
