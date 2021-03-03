import React, { Component } from 'react';
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/button';


class NewApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  formControls: {
      //   startTime: '',
      //   endTime: '',
      //   price: '',
      //   status: ''
      // },
      formControls: {
          start_time: {
            value: ''
          },
          end_time: {
            value: ''
          },
          price: {
            value: ''
          },
          status: {
            value: ''
          }
      },
        show: false
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   const target = event.target;
  //   const value = target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // }


  handleChange(e){
   let formControls = this.state.formControls;
   formControls[e.target.name] = e.target.value;
   this.setState({
    formControls
   });
  }

  handleSubmit(e, formControls) {
    e.preventDefault();
    Axios.post('http://localhost:8080/appointments/', this.state.formControls)
      .then(function(response) {
        console.log(response);
        window.location.reload();
        this.props.closeModal();
        //Perform action based on response
      })
      .catch(function(error) {
        console.log(error);
        //Perform action based on error
      });
  }



  render() {
    return (
      <div className="NewApp">
        <Modal
          show={this.props.isOpen}
          onHide={this.props.closeModal}
          backdrop="static"
        >
      <Modal.Header closeButton>
        <Modal.Title>Create New Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="start_time">
            <Form.Label>Start Date/Time</Form.Label>
            <Form.Control type="text"
              placeholder="Start Time"
              name="start_time"
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="end_time">
            <Form.Label>End Date/Time</Form.Label>
            <Form.Control type="text" placeholder="End Time" name="end_time" onChange={this.handleChange} />
          </Form.Group>

           <Form.Group controlId="price">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Price" name="price" onChange={this.handleChange} />
          </Form.Group>

           <Form.Group controlId="status">
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" placeholder="Status" name="status" onChange={this.handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
    );
  }
}

export default NewApp;
