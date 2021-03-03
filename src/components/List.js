import React, { Component } from 'react';
import Axios from 'axios';
import View from './View';
import '../../styles/App.css';

class List extends Component {
  constructor() {
    super();
    this.state = {
      appointments: [],
      status: ''
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/appointments')
      .then(response => {
        this.setState({
          appointments: response.data
        });
      })
      .catch(e => {
        console.log(e);
      })
  }

  // showAppointments() {
  // if (this.state.appointments) {
  //   return this.state.results.map((result, index) => {
  //     return <View key={index} result={result} deleteAppointment={this.deleteAppointment} updateStatus={this.updateStatus}/>
  //   })
  // }
  // }



  deleteAppointment(appointment) {
    Axios.delete(`http://localhost:8080/appointments/${appointment.id}`)
      .then((response) => {
        // this.showAppointments();
        // window.location.reload();
        console.log('updatee');
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  updateStatus(appointment) {
    Axios.put(`http://localhost:8080/appointments/${appointment.id}`, {
        status: this.state.status
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.appointments);
    return (
      <div className="appointments">
         <table className="table">
          <thead className="thead-dark">
              <tr>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
              </tr>
          </thead>
          <tbody>
            {
              this.state.appointments.map((p, index) => {
                return  <tr key={index}>
                        <td>{p.start_time}</td>
                        <td>{p.end_time}</td>
                        <td>${p.price}</td>
                        <td>{p.status}</td>
                        <td>
                          <button className="button" onClick={(e) => this.deleteAppointment()}>
                            View
                          </button>
                        </td>
                        </tr>
                })
            }
          </tbody>
        </table>
      </div>
    );
  }
};


export default List;
