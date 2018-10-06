import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import components here
import Home from './js/components/home/home'
import About from './js/components/about/about'

class App extends Component {
  constructor() {
    super()
    // 'goodResponse' will change based off of the backend and will determine whether to display the login screen or the user's account
    const goodResponse

    this.state = {
      loggedIn: goodResponse ? true : false
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          { !this.state.loggedIn && 
            <Router>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                {/* <Route path='/services' component={Services}/> */}
                {/* <Route path='/contact' component={Contact}/> */}
                {/* <Route path='/blog' component={Blog}/> */}
                {/* <Route path='/gender' component={Gender}/> */}
                {/* <Route path='/drones' component={Drones}/> */}
                {/* <Route path='/software' component={Software}/> */}
            </Router>
          }
        </header>
      </div>
    );
  }
}

export default App