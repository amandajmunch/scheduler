import React, { Component } from 'react';
import '../../styles/App.css';
import List from './List';
import Search from './Search';
import Sort from './Sort';
import NewApp from './NewApp';
import Axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      search: '',
      result: null,
      sorted: null,
      startdate: '',
      enddate: '',
      clear: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.ChangeDate = this.ChangeDate.bind(this);
    this.EndDate = this.EndDate.bind(this);
    this.clearSort = this.clearSort.bind(this);

  }

  //open and close modal
  openModal() {
    this.setState({
      isOpen: true
    });
  }

  closeModal() {
    this.setState({
      isOpen: false
    });
    window.location.reload();
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  componentDidUpdate(){
    if(this.state.search == "" && this.state.result !== null){
      this.setState({
        result: null
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    Axios.get(`http://localhost:8080/appointments/search/${this.state.search}`)
      .then(response => {
        this.setState({
          result: response.data,
        });
      })
      .catch(e => {
        console.log(e);
      })
  }

  ChangeDate(e) {
    this.setState({
      startdate: e
    });
  }

  EndDate(e) {
    this.setState({
      enddate: e
    });
  }

//format times to display in ISOString for database. Search database for items, sort by price ASC.
  onFilter(e) {
    e.preventDefault();
    let start = this.state.startdate;
    start = start.toString().split(' ').splice(1, 3).join(' ');

    let end = this.state.enddate;
    end = end.toString().split(' ').splice(1, 3).join(' ');

    let startDate = new Date(start).toISOString().split(':')[0].slice(0, -3);
    let endDate = new Date(end).toISOString().split(':')[0].slice(0, -3);

    Axios.get(`http://localhost:8080/appointments/search/times/${startDate}&${endDate}`).then(response => {
      let data = response.data;
      data = data.sort((a, b) => (a.price > b.price) ? 1 : -1);
      this.setState({
        sorted: data,
        clear: false
      });
    }).catch(function(error) {
      console.log('error with filter:' + error);
    });
  }

//on click, clear filtering
  clearSort(e) {
    e.preventDefault();
    this.setState({
      startdate: '',
      enddate: '',
      clear: true,
      sorted: null
    });

    this.interval = setInterval(() => {
      this.setState({
        clear: false
      })
    }, 500);
  }

  //ternary operator, if openModal state is true, display modal. False, display none
  render() {
    return (
      <div className="app">
          <div className="top col-sm-12">
            <Sort
              ChangeDate={this.ChangeDate}
              EndDate={this.EndDate}
              onFilter={this.onFilter}
              clearSort={this.clearSort}
              startdate={this.state.startdate}
              enddate={this.state.enddate}
            />
            <Search
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
          </div>
          <List
            result={this.state.result}
            search={this.state.search}
            sorted={this.state.sorted}
            clear={this.state.clear}
          />
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
