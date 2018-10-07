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
import Calendar from 'react-calendar'
// import something from ''
import '../../../../stylesheets/eventsCalendar.scss'

class EventsCalendar extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      username: '',
      date: new Date()
    };
  }

  onChange = date => this.setState({ date })

  render(props) { 
    return (
      <div className="eventsCalendar">
        <h1>
            { this.state.date.toLocaleDateString() }
        </h1>
        <Calendar 
            onChange = { this.onChange }
            value = { this.state.date }
        />
        <h1>
            Find Events Near You
        </h1>
      </div>
    )
  }
}

// We need an intermediary variable for handling the recursive nesting.
export default (EventsCalendar)