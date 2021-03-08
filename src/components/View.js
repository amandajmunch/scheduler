import React, { Component } from 'react';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/App.css';

class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_time: '',
      end_time: '',
      price: '',
      status: '',
      edit: false
    };
    this.updateStatus = this.updateStatus.bind(this);
  };

  //call database to get individual appointment information based off id
  componentDidMount(props) {
    Axios.get(`http://localhost:8080/appointments/${this.props.id}`)
      .then((response) => {
        this.setState({
          start_time: response.data.start_time,
          end_time: response.data.end_time,
          price: response.data.price,
          status: response.data.status,
          id: response.data.id
        });
      })
      .catch(function(error) {
        console.log('error:' + error);
      })
  }

  //update individual appointment with new status information
  updateStatus() {
    Axios.put(`http://localhost:8080/appointments/${this.state.id}`, {
        start_time: this.state.start_time,
        end_time: this.state.end_time,
        price: this.state.price,
        status: this.state.status
      })
      .then(response => {
        this.props.closeModal();
      })
      .catch(error => {
        console.log(err);
      });
  }

  getEndTime() {
    let time = this.props.formatDate(this.state.end_time);
    console.log('time: ' + time);
    let final = time.split(' ').slice(-1);
    return final;
  }

  //on doubleclick, make item editable. ternary operator shows either <p> or <input/>
  render() {
    return (
      <div className="viewAppointment">
        <Modal
            show={this.props.isOpen}
            onHide={this.props.closeModal}
            backdrop="static"
          >
          <Modal.Header closeButton>
            <Modal.Title>View Appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
             <p>Start Time: {this.props.formatDate(this.state.start_time)}</p>
             <p>End Time: {this.props.formatDate(this.state.end_time)} {this.getEndTime.bind(this)}</p>
             <p>Price: {this.state.price}</p>
            { this.state.edit ?
                <input
                type="text"
                value={this.state.status}
                onChange={(event) => {
                  this.setState({
                    status: event.target.value
                  });
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === 'Escape') {
                    this.setState({
                      edit: false
                    });
                  }
                }}
              /> : <p onDoubleClick={() => {
                    this.setState({
                      edit: true
                    })
                  }}
                >Status: {this.state.status}</p>
              }
              <h6 className="text-muted">Double click above to change status</h6>
             <br/>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-outline-secondary" onClick={this.updateStatus}>
              Update Status
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default View;
