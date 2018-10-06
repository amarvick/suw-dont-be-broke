import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Home from './js/components/home'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()

    // this.state = {
    //   loggedIn: false,
    //   loggedInUserId: ''
    // }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
              <Route exact path='/' component={Home}/>
              {/* <Route path='/about' component={About}/> */}
              {/* <Route path='/services' component={Services}/> */}
              {/* <Route path='/contact' component={Contact}/> */}
              {/* <Route path='/blog' component={Blog}/> */}
              {/* <Route path='/gender' component={Gender}/> */}
              {/* <Route path='/drones' component={Drones}/> */}
              {/* <Route path='/software' component={Software}/> */}
          </Router>
        </header>
      </div>
    );
  }
}

export default App