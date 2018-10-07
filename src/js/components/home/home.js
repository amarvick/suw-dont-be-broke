/* File Name: home.js                                           *                                   
 * Description: Home Page                                       */

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
// import something from ''
import '../../../stylesheets/home.scss'

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      username: ''
    };
  }

  render(props) {  
    const { classes } = this.props;
    const style = {
      margin: 15,
    };

    return (
      <div>
      </div>
    )
  }
}

// We need an intermediary variable for handling the recursive nesting.
export default (Home)