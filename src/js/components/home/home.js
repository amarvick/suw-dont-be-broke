/* File Name: home.js                                           *                                   
 * Description: Home Page                                       */

import React, { Component } from 'react'
import '../../../stylesheets/home.scss'

class Home extends Component {
  constructor() {
    super()

    // this.state = {
    //   username: ''
    // }
  }

  // The question template
  render(props) {  
    let number = 10
    
    return (
      <div>
        { number }
      </div>
    )
  }
}

export default Home;