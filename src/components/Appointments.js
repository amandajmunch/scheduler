import React, { Component } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Axios from 'axios';
import View from './View';
import '../../styles/App.css';
// import Search from './Search';
// import Sort from './Sort';

const columns = [
  { header: 'Id', accesor: 'id', width: 70 },
  { header: 'Start Time', accesor: 'startTime' },
  { header: 'End Time', accesor: 'endTime' },
  {
    header: 'Price',
    accesor: 'price',
    type: 'number',
    width: 90,
  },
  { header: 'Status', accesor: 'status', width: 160, sortable: 'false' },
];


class Appointments extends Component {
  constructor() {
    super();
    this.state = {
      results: null
    };
    this.showAppointments = this.showAppointments.bind(this);;
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/appointments')
      .then(response => {
        this.setState({
          results: response.data
        });
      })
      .catch(e => {
        console.log(e);
      })
  }

  showAppointments() {
    if (this.state.results) {
      return this.state.results.map((result, index) => {
        return <View key={index} result={result} deleteAppointment={this.deleteAppointment.bind(this)}/>
      })
    }
  }

  deleteAppointment(appointment) {
    if (appointment) {
      Axios.delete(`http://localhost:8080/appointments/${appointment.id}`)
        .then((response) => {
          this.showAppointments();
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  updateStatus(appointment) {
    Axios.put(`http://localhost:8080/appointments/${appointment.id}`, {
        status: this.state.status
      })
      .then(response => {
        console.log(response);
        this.showAppointments();
      })
      .catch(error => {
        console.log(err);
      });
  }
  render() {
    return (
      <div style={{ height: 400, width: '50vw' }} className="appointmentsContainer">
          <ReactTable
            data = { this.state.results }
            columns = { columns }
            showPagination = { false }
            defaultPageSize = { tableData.length }
          />
      </div>
    );
  }

}

export default Appointments;
