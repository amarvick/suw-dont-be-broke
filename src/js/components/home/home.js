/* File Name: home.js                                           *                                   
 * Description: Home Page                                       */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import EventsCalendar from './components/eventsCalendar'

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
        <EventsCalendar />
      </div>
    )
  }
}

// We need an intermediary variable for handling the recursive nesting.
export default (Home)