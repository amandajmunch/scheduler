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
      interval: 0
    };
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

  // componentDidMount(){
  //     Axios.get('http://localhost:8080/appointments?start_time=2020-01-25 09:30:00')
  //       .then(response => {
  //         console.log(response.data);
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       })
  // }

//ternary operator, if openModal state is true, display modal. False, display none
  render() {
    return (
      <div className="app">
          <div className="top">
            <Sort/>
            <Search/>
          </div>
          <List/>
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
