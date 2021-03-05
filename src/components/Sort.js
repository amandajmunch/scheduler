import React, { Component } from 'react';
import '../../styles/App.css';
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export class Sort extends Component {
  constructor() {
    super()
    this.state = {
      startdate: '',
      enddate: ''
    }
  }

  ChangeDate(e){
    console.log(e);
    this.setState({
      startdate: e
    });
  };

  EndDate(e){
    console.log(e);
    this.setState({
      enddate: e
    });
  };

  onsubmit(e){
    debugger;
    const data = { startdate: this.state.startdate, enddate: this.state.enddate };
    e.preventDefault();
    axios.post('http://localhost:8080/appointments', data).then(response => {
      console.log(response.data);
      // this.setState({
      //   appointments: response.data
      // });
    });
  }

  render() {
    return (
      <div>
          <form onSubmit={this.onsubmit}>
            <div className="row hdr" >
              <div className="col-sm-3 form-group">
            </div>
            <div className="col-sm-3 form-group">
              <DatePicker className="form-control"
                selected={this.state.startdate}
                placeholderText="Select Date"
                showPopperArrow={false}
                onChange={this.ChangeDate}
              />
            </div>
            <div className="col-sm-3 form-group">
              <DatePicker className="form-control"
                selected={this.state.enddate}
                placeholderText="Select Date"
                showPopperArrow={false}
                onChange={this.EndDate}
              />
            </div>
            <div className="col-sm-3 form-group">
              <button type="submit" className="btn btn-outline-primary">Filter</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Sort;
