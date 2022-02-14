import React, { Component } from "react";
// import {
//   Button,
//   Container,
//   Jumbotron,
//   Modal,
//   ModalBody,
//   Form,
// } from "reactstrap";
import { Form, Button, Container, Jumbotron, Modal, ModalBody } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      email: null,
      modalOpen: false,
      nama: null,
    };

    this.submit = this.submit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNamaChange = this.handleNamaChange.bind(this);
    console.log(this.props);

    console.log(props);
  }

  submit() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  handleEmailChange = (event) => {
    event.preventDefault();

    this.setState({ email: event.target.value });
  };

  handleNamaChange = (event) => {
    event.preventDefault();

    this.setState({ nama: event.target.value });
  };

  render() {
    return (
      <div>
        <React.Fragment>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="Fullname">
                <Form.Label>Full Name</Form.Label>
                <input name="nama" onChange={this.handleNamaChange}></input>
                <Form.Control type="text" placeholder="Enter Fullname" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={this.handleEmailChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="PhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="BirthPlace">
                <Form.Label>Birth Place</Form.Label>
                <Form.Control type="text" placeholder="Enter Birth" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="BirthPlace">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control type="date" placeholder="Enter Date" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button onClick={this.submit} variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>

          <Modal isOpen={this.state.modalOpen}>
            <ModalBody>
              <br />
              Nama
              {this.state.nama}
              <br />
              Email
              {this.state.email}
            </ModalBody>
            <button onClick={this.submit}>Kembali</button>
          </Modal>
        </React.Fragment>
      </div>
    );
  }
}

export default Home;
