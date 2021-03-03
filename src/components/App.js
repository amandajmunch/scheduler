import React, { Component } from 'react';
import '../../styles/App.css';
import List from './List';
import Search from './Search';
import Sort from './Sort';


class App extends Component {
  render() {
    return (
      <div className="app">
          <div className="top">
            <Sort/>
            <Search/>
          </div>
          <List/>
          // newapp
      </div>
    )
  }
}

export default App;
