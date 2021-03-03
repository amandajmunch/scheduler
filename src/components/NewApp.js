import React, { Component } from 'react';
import Axios from 'axios';

class NewApp extends Component {
  constructor() {
    super();
    this.state = {
      formControls: {
        startTime: {
          value: ''
        },
        endTime: {
          value: ''
        },
        price: {
          value: ''
        },
        status: {
          value: ''
        }
      }
    }
  }

  inputChangeHandler = (e) => {
    let formControls = { ...this.state.formControls };
    formControls[e.target.name] = e.target.value;
    this.setState({
      formControls
    });
  }

  formHandler = (e, formControls) => {
    e.preventDefault();
    Axios.post('http://localhost:8080/appointments/', this.state.formControls)
      .then(function(response) {
        console.log(response);
        window.location.reload();
        //Perform action based on response
      })
      .catch(function(error) {
        console.log(error);
        //Perform action based on error
      });
  }


  render() {
    return (
      <div className="NewApp">
        <form noValidate onSubmit={this.formHandler.bind(this)}>
          <label htmlFor="startTime">startTime</label>
          <input id="startTime"
            name="startTime"
            type="text"
            onChange={this.inputChangeHandler.bind(this)}
            value={this.state.formControls.startTime.value}
            required
          />

          <label htmlFor="endTime">endTime</label>
          <input id="endTime"
            name="endTime"
            type="text"
            onChange={this.inputChangeHandler.bind(this)}
            value={this.state.formControls.endTime.value}
            required
          />

          <label htmlFor="price">price</label>
          <input id="price"
            name="price"
            type="text"
            onChange={this.inputChangeHandler.bind(this)}
            value={this.state.formControls.price.value}
            required
          />

          <label htmlFor="status">status</label>
          <input id="status"
            name="status"
            type="file"
            onChange={this.inputChangeHandler.bind(this)}
            value={this.state.formControls.price.status}
            required
          />

          <button>Add Appointment</button>
      </form>
    </div>
    );
  }
}

export default NewApp;
