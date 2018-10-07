/* File Name: home.js                                           *                                   
 * Description: Home Page                                       */

import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'material-ui/modal'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../../../stylesheets/home.scss'

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      username: ''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  // defining click function
  handleClick(event){
    window.location="https://medium.com/@anneeb/redirecting-in-react-4de5e517354a"
}   

  render(props) {  
    let string = 'Login'

    const style = {
      margin: 15,
    };

    return (
      <div>
        <div>
          <MuiThemeProvider>
            <div>
              <AppBar>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                  { string }
                </Button>
              </AppBar>
            </div>
          </MuiThemeProvider>
        </div>

        <div className="modal-container">
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <MuiThemeProvider>
                <TextField
                  hintText="Enter your Username"
                  floatingLabelText="Username"
                  onChange = {(event,newValue) => this.setState({username:newValue})}
                  />
                <br/>
                <TextField
                  type="password"
                  hintText="Enter your Password"
                  floatingLabelText="Password"
                  onChange = {(event,newValue) => this.setState({password:newValue})}
                  />
                <br/>
                <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
              </MuiThemeProvider>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Home;