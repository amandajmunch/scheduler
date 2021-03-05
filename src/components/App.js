import React, { Component } from 'react';
import '../../styles/App.css';
import List from './List';
import Search from './Search';
import Sort from './Sort';
import NewApp from './NewApp';

function loop(){
    let rand = Math.round(Math.random() * (3000 - 500)) + 500;
    setTimeout(()=> {
        console.log('loop num : ' + rand);
        loop();
      }, rand);

}


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

  componentDidMount(){
    loop();
  }


  // insertDB(){
  //   let rand = Math.round(Math.random() * (6000 - 500)) + 500;;
  //   setInterval(() => {
  //     console.log('random console log: ' + rand);
  //       this.setState({
  //         interval: rand
  //       });
  //       console.log(this.state.interval);
  //     }, rand);
  // }
  // doSomething(){
  //   console.log('hey');
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
