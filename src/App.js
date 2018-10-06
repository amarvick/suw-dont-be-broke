import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';
import Home from './js/components/home'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <Route exact path='/' component={Home}/>
              {/* <Route path='/about' component={About}/> */}
              {/* <Route path='/services' component={Services}/> */}
              {/* <Route path='/contact' component={Contact}/> */}
              {/* <Route path='/blog' component={Blog}/> */}
              {/* <Route path='/gender' component={Gender}/> */}
              {/* <Route path='/drones' component={Drones}/> */}
              {/* <Route path='/software' component={Software}/> */}
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App