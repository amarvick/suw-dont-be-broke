/* File Name: home.js                                           *                                   
 * Description: Home Page                                       */

import React, { Component } from 'react';
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