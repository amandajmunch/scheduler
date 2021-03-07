import React, { Component } from 'react';
import '../../styles/App.css';
import List from './List';
import Search from './Search';
import Sort from './Sort';
import NewApp from './NewApp';
import Axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state = {
      isOpen: false,
      search: '',
      result: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.filterAppointment = this.filterAppointment.bind(this);
  }

//open and close modal
  openModal(){
    this.setState({
      isOpen: true
    });
  }

  closeModal(){
    this.setState({
      isOpen: false
    });
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
    // console.log(this.state.search);
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   if(this.state.search == ''){
  //         this.setState({
  //           result: null
  //         });
  //      console.log('emptry search');
  //   }
  // }

  // filterAppointment(){
  //   let data = this.state.appointments;
  //   data = data.filter(function(item){
  //      return item.id == this.state.result.id;
  //   });

  //   console.log(data);
  // }


  handleSubmit(e){
    e.preventDefault();
    Axios.get(`http://localhost:8080/appointments/search/${this.state.search}`)
      .then(response => {
          console.log(response.data);
          this.setState({
            result: response.data
          });
        })
        .catch(e => {
          console.log(e);
        })
  }

//ternary operator, if openModal state is true, display modal. False, display none
  render() {
    return (
      <div className="app">
          <div className="top">
            <Sort/>
            <Search
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          </div>
          <List result={this.state.result} search={this.state.search}/>
          <button className="btn btn-outline-info" onClick={this.openModal.bind(this)}>Add Appointment</button>
          { this.state.isOpen ?
            <NewApp
              closeModal={this.closeModal.bind(this)}
              isOpen={this.state.isOpen}
              handleSubmit={this.handleSubmit}
            />
            :
            null
          }
      </div>
    )
  }
}

export default App;
