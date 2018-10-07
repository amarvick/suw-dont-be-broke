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
import { white } from 'material-ui/styles/colors';
import '../../../../stylesheets/eventsCalendar.scss'
import { green400 } from 'material-ui/styles/colors';

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
    let style = { color: white }
    let theFontSize = { fontSize: 16 }

    let theEvent
    let theDate = this.state.date.toLocaleDateString()
    let theTime
    let theAddress
    if (theDate == '10/7/2018') { 
      theEvent = 'Seattle Startup Weekend pitches!'
      theTime = '3:00PM'
      theAddress = 'Seattle Public Library'
    } else if (theDate == '10/23/2018') { 
      theEvent = 'Kevin O\'Leary in Seattle!'
      theTime = '10:30AM' 
      theAddress = 'Marion Oliver McCaw Hall at Seattle Center, Seattle, WA, US'
    }

    return (
      <div className="eventsCalendar">
        <h1 style={style}>
            { this.state.date.toLocaleDateString() }
        </h1>
        <Calendar 
            onChange = { this.onChange }
            value = { this.state.date }
        />
        <h1 style={style}>
            Find Events Near You
        </h1>
        <p style={{...style, ...theFontSize}}>
          { theEvent } <br/>
          { theDate } <br/>
          { theTime } <br/>
          { theAddress } <br/>
        </p>
      </div>
    )
  }
}

// We need an intermediary variable for handling the recursive nesting.
export default (EventsCalendar)