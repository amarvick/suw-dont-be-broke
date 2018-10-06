/* File Name: home.js                                           *                                   
 * Description: Home Page                                       */

import React, { Component } from 'react'
import '../../../stylesheets/home.scss'

class Home extends Component {
  constructor() {
    super()

    this.state = {
      username: ''
    }
  }

  render(props) {  
    let string = 'THIS WORKS!!!'
    
    return (
      <div>
        { string }
      </div>
    )
  }
}

export default Home;