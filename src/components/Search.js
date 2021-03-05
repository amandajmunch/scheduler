import React, { Component } from 'react';
import Axios from 'axios';
import { MDBInput, MDBCol } from "mdbreact";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      results: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Axios.get(`http://localhost:8080/appointments?where${this.state.search}`)
    //   .then(response=>{
    //     this.setState({
    //       results: response.data
    //     })
    //   })
    //   .catch(function(error){
    //     console.log(error);
    //   })
    console.log('worked');
  }

  // showResults(){
  //   if(this.state.results){
  //     return(
  //      <Redirect to={{
  //         pathname: '/results',
  //         state: { results: this.state.results }
  //       }}/>
  //     );
  //   }
  //   if(this.state.results === null){
  //     return;
  //   }
  // }


  render() {
    return (
      <div className="searchPage d-flex">
        <MDBCol md="6">
          <MDBInput hint="Search" type="text" containerClass="mt-0" />
        </MDBCol>
        <div className="col-sm-3 form-group">
          <button type="submit" className="btn btn-outline-success">Search</button>
        </div>

      </div>
    )
  }
}

export default Search;
