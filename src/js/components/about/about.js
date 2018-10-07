/* File Name: about.js                                          *                                   
 * Description: About Page                                      */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../../stylesheets/about.scss'

class About extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };
  }

  render(props) {  
    const { classes } = this.props;
    const style = {
      margin: 15,
    };

    return (
      <div>
        <h1>
            This service teaches YOU, the average high school OR young college kid, how to NOT live a broke future!
        </h1>
      </div>
    )
  }
}

// We need an intermediary variable for handling the recursive nesting.
export default (About)