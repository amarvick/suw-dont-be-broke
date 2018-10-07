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
      username: ''
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // defining click function
  handleClick(event){
    window.location="https://medium.com/@anneeb/redirecting-in-react-4de5e517354a"
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
          </div>
        </MuiThemeProvider>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <MuiThemeProvider>
              <Typography variant="title" id="modal-title">
                Sign Up!
              </Typography>
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
          </div>
        </Modal>
      </div>
    )
  }
}

// We need an intermediary variable for handling the recursive nesting.
export default withStyles(styles)(Navbar)