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
        About page
      </div>
    )
  }
}

// We need an intermediary variable for handling the recursive nesting.
export default (About)