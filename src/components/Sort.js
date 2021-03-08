import React, { Component } from 'react';
import '../../styles/App.css';
import Axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Sort extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <form onSubmit={this.onsubmit}>
            <div className="row hdr" >
              <div className="form-group">
            </div>
            <div className="col-sm-3 form-group">
              <DatePicker className="form-control"
                dateFormat="MM/dd/yy"
                selected={this.props.startdate}
                placeholderText="Select Date"
                showPopperArrow={false}
                onChange={this.props.ChangeDate}
              />
            </div>
            <div className="col-sm-3 form-group">
              <DatePicker className="form-control"
                dateFormat="MM/dd/yy"
                selected={this.props.enddate}
                placeholderText="Select Date"
                showPopperArrow={false}
                onChange={this.props.EndDate}
              />
            </div>
            <div className="col-sm-2 form-group">
              <button type="submit" className="btn btn-outline-primary" onClick={(e)=>this.props.onFilter(e)}>Filter</button>
            </div>
            <div className="col-sm-2 form-group">
              <button type="submit" className="btn btn-outline-primary" onClick={(e)=>this.props.clearSort()}>Clear</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Sort;
