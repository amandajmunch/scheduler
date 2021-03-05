import React, { Component } from 'react';
import '../../styles/App.css';
import List from './List';
import Search from './Search';
import Sort from './Sort';
import NewApp from './NewApp';

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
