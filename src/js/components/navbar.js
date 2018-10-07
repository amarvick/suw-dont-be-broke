/* File Name: navbar.js                                         *                                   
 * Description: Nav Bar                                         */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { white } from 'material-ui/styles/colors';
// import something from ''
// import '../../stylesheets/home.scss

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class Navbar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      username: '',
      isSignUpModal: true
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  updateModal = () => {
    this.setState({ isSignUpModal: false })
  }

  // defining submit function
  handleClick(event){
    this.updateModal();  
  }   

  render(props) {  
    const { classes } = this.props;
    const textColor = {
      color: white
    }
    const style = {
      marginLeft: 15,
      marginRight: 15
    };

    let signUpModal = (
        <MuiThemeProvider>
          <Typography variant="display2" id="modal-title" >
            Sign Up!
          </Typography>
          <TextField
            hintText="Enter your Name"
            floatingLabelText="Name"
            onChange = {(event,newValue) => this.setState({username:newValue})}
            />
          <br/>
          <TextField
            hintText="Enter your Email"
            floatingLabelText="Email"
            onChange = {(event,newValue) => this.setState({email:newValue})}
            />
          <br/>
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange = {(event,newValue) => this.setState({password:newValue})}
            />
          <br/>
          <TextField
            hintText="Enter your City"
            floatingLabelText="City"
            onChange = {(event,newValue) => this.setState({city:newValue})}
            />
          <br/>
          <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
        </MuiThemeProvider>
    )
    let personaModal = (
      <MuiThemeProvider>
        <Typography variant="display2" id="modal-title" >
            Select the persona you identify most with
          </Typography>
        <div padding = '3pt'>
          <a href="/"><img src="./p1.jpg" height= "150pt" padding='2pt' className="persona"/></a>
          <text variant="display1" margin left='5 pt' className="persona"> Josh Sanchez </text>
          <div variant="title" margin left= '10pt' align="right" className="persona">Hi! I'm Josh Sanchez, and I'm a 17 year old student at Sierra High School. This coming fall I'm going to be enrolled as a Pre-Med student at the Boston University. I have a part time job at a local retail store and need to begin to budget in order to pay off my college loans.Want to learn more about investing in order to start preparing for the future and growing my financial assets.</div>
        </div>
        <br/>
        <div padding = '3pt'>
          <text variant="title" margin left= '10pt' className="persona" align='right'>I'm Sarah Richardson, a 19 year old CS major at the University of Washington. I would like to begin learning more about budgeting in order to be able to finance my own home to live in post-undergrad.</text>
          <text variant="display1" margin right='5 pt' className="persona" align='right'> Sarah Richardson </text>
          <img src="./p2.png" height= "150pt" padding='2pt' className="persona" align='right'/>
        </div>
        <br/>
        <div padding = '3pt'>
          <img src="./p3.png" height= "150pt" padding='2pt' className="persona"/>
          <div variant="display2" margin-left='5 pt' className="persona"> Ella Lee </div>
          <div variant="title" margin-left= '10pt' className="persona">
          Hello, I am Ella Lee. I have recently graduated from Shoreline Community College. I just got my first job and it sparked my interest in investing for my future through stock investments and saving for my retirement. Unfortunately, I have a lack of knowledge on how to get started on these two topics.</div>
        </div>
      </MuiThemeProvider>
    )

    return (
      <div>
        <MuiThemeProvider>
          <div>

            <ul>              
              <li style={style} className="active"><a href="/">Home</a></li>
              <li style={style}><a href="/About">About Us</a></li> {/* /about - Make component real quick */}
              <li style={style}><a href="#" onClick={this.handleOpen} style={textColor} id='signUpButton'>Sign Up</a></li>
              <li className="userMenu">
                {/* <div className="userMenuToggle">User Menu</div> */}
                {/* <ul className="userMenuContent">
                  <li href="http://apple.com">User Item 1</li>
                  <li>User Item 2</li>
                  <li>User Item 3</li>
                </ul> */}
              </li> 
            </ul>

            {/* <AppBar>
              <Button onClick={this.handleOpen}>Sign Up</Button>
            </AppBar> */}
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
              >
              <div style={getModalStyle()} className={classes.paper}>
                  { this.state.isSignUpModal &&
                     signUpModal 
                  }
                  { !this.state.isSignUpModal &&
                    personaModal
                  }
               </div>
            </Modal>  
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

// We need an intermediary variable for handling the recursive nesting.
export default withStyles(styles)(Navbar)