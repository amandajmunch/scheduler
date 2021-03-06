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
          start_time:response.data.start_time,
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

// https://flaviocopes.com/react-edit-doubleclick/ referenced for doubleclick functionality
  render() {
    // console.log(this.props);
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
             <h3>{this.props.formatDate(this.state.start_time)}</h3>
             <p>{this.props.formatDate(this.state.end_time)}</p>
             <p>{this.state.price}</p>
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
                >{this.state.status}</p>
              }
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
