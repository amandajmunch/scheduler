import React, { useState, useEffect, useRef, Component } from 'react';
import Axios from 'axios';
import View from './View';
import '../../styles/App.css';
import moment from 'moment';


//function for random DB entry
function createRandomAppointment(){
    let appointmentData = {
         start_time:'2020-03-25 09:30:00',
         end_time:'2020-03-25 11:30:00',
         price:200,
         status:'Pending'
    };

    Axios.post('http://localhost:8080/appointments/', appointmentData)
      .then(function(response) {
        return;
      })
      .catch(function(error) {
        console.log(error);
      });
  }

//create random timeout and reset each time
function loop(){
    let rand = Math.round(Math.random() * (12000000 - 600000)) + 600000;
    setTimeout(()=> {
        createRandomAppointment();
        this.getAppointments();
        loop();
      }, rand);
}

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      searched: null,
      isOpen: false,
      id: 0,
      count: 0
    };
    this.deleteAppointment = this.deleteAppointment.bind(this);
    this.openModal = this.openModal.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.filterAppointment = this.filterAppointment.bind(this);
    this.getAppointments = this.getAppointments.bind(this);
  }

  //each second, get appointments as random db entries occur
   componentDidMount() {
    this.getAppointments();
    this.interval = setInterval(() =>{

      loop();
      }, 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    formatDate(date){
      let newDate = new Date(date).toLocaleString();
      return newDate;
    }

  getAppointments(){
    Axios.get('http://localhost:8080/appointments')
      .then(response => {
        console.log('getting appointments');
        this.setState({
          appointments: response.data
        });
      })
      .catch(e => {
        console.log(e);
      })
  }


    componentWillReceiveProps(props) {
      if (props.result !== null) {
        this.setState({ searched: props.result });
        setTimeout(()=> {
          this.filterAppointment();
        }, 500);
      };

      if(props.result !== null && props.search == "" || undefined || null){
        console.log('null search');
      }
  }


  filterAppointment(props){
    let data = this.state.appointments;
    let searched = this.state.searched;
        data = data.filter(function(item){
          return item.price == searched.price;
        });
    this.setState({
      appointments: data
    });
  }

//open and close modal
  openModal(id){
    this.setState({
      isOpen: true,
      id: id
    });

  }

  closeModal(){
    this.setState({
      isOpen: false
    });
    this.getAppointments();
  }

  deleteAppointment(id) {
    Axios.delete(`http://localhost:8080/appointments/${id}`)
      .then((response) => {
        this.getAppointments();
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="appointments">
         <table className="table">
          <thead className="thead-dark">
              <tr>
                  <th scope="col">Start Time</th>
                  <th scope="col">End Time</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">View/Delete</th>
              </tr>
          </thead>
          <tbody>
            {
              this.state.appointments.map((p) => {
                return  <tr key={p.id}>
                        <td>{this.formatDate(p.start_time)}</td>
                        <td>{this.formatDate(p.end_time)}</td>
                        <td>${p.price}</td>
                        <td>{p.status}</td>
                        <td>
                          <button className="btn btn-outline-secondary" onClick={(e)=>this.openModal(p.id)}>
                            View/Edit
                          </button>
                          <button className="btn btn-outline-danger" onClick={(e)=>this.deleteAppointment(p.id)}>
                            Delete
                          </button>
                        </td>
                        </tr>
                })
            }

            { this.state.isOpen ?
                <View
                  closeModal={this.closeModal.bind(this)}
                  isOpen={this.state.isOpen}
                  formatDate={this.formatDate.bind(this)}
                  id={this.state.id}
                />
                  :
                    null
            }
          </tbody>
        </table>
      </div>
    );
  }
};


export default List;
