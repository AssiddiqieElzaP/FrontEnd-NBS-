import { Alert } from "bootstrap";
import React, { Component } from "react";
import {
  Form,
  Label,
  Input,
  FormGroup,
  FormText,
  Button,
  Modal,
  Container,
  ModalBody,
  Col,
} from "reactstrap";

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
    // -> undefined

    // Props parameter is still available
    console.log(props);

    // -> { icon: 'home', … }
  }

  submit() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  handleEmailChange = (event) => {
    event.preventDefault();

    this.setState({ email: event.target.value });
    // this.props.setInput(event.target.name, event.target.value)
  };

  handleNamaChange = (event) => {
    event.preventDefault();

    this.setState({ nama: event.target.value });
    // this.props.setInput(event.target.name, event.target.value)
  };

  handleNumberChange = (event) => {
    event.preventDefault();

    this.setState({ Number: event.target.value });
    // this.props.setInput(event.target.name, event.target.value)
  };

  handlePlaceChange = (event) => {
    event.preventDefault();

    this.setState({ Place: event.target.value });
    // this.props.setInput(event.target.name, event.target.value)
  };

  handleDateChange = (event) => {
    event.preventDefault();

    this.setState({ Date: event.target.value });
    // this.props.setInput(event.target.name, event.target.value)
  };

  handleColorChange = (event) => {
    event.preventDefault();

    this.setState({ Color: event.target.value });
    // this.props.setInput(event.target.name, event.target.value)
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Form>
            <FormGroup row>
              <Label for="exampleNama" sm={2}>
                Nama
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleNama"
                  name="nama"
                  placeholder="Your FullName"
                  onChange={this.handleNamaChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  onChange={this.handleEmailChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleNumber" sm={2}>
                PhoneNumber
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleNumber"
                  name="phoneNumber"
                  placeholder="Your Number"
                  type="number"
                  onChange={this.handleNumberChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="examplePlace" sm={2}>
                Birth Place
              </Label>
              <Col sm={10}>
                <Input
                  id="examplePlace"
                  name="BirthPlace"
                  placeholder="Your BirthPlace"
                  type="text"
                  onChange={this.handlePlaceChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleNumber" sm={2}>
                Birth Date
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleDate"
                  name="BirthDate"
                  placeholder="Your BirthDate"
                  type="date"
                  onChange={this.handleDateChange}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label for="exampleColor" sm={2}>
                Color
              </Label>
              <Col sm={10}>
                <Input
                  id="exampleColor"
                  name="Color"
                  placeholder="color placeholder"
                  type="color"
                  onChange={this.handleColorChange}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input id="exampleFile" name="file" type="file" />
              <FormText>Choose your image</FormText>
            </FormGroup>

            <FormGroup check>
              <Input type="checkbox" />
              <Label check>Check me out</Label>
            </FormGroup>

            <Button onClick={this.submit} color="primary">Submit</Button>
          </Form>
        </Container>

        <Modal isOpen={this.state.modalOpen}>
          <ModalBody color={this.state.Color} outline>
            <br />
            Nama :{this.state.nama}
            <br />
            Email :{this.state.email}
            <br />
            Phone Number :{this.state.Number}
            <br />
            Birth Place :{this.state.Place}
            <br />
            Birth Date :{this.state.Date}
            <br />
            
          </ModalBody>
          <Button onClick={this.submit} color="primary">Tutup</Button>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Home;
