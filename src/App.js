import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Import components here
import './stylesheets/nav.scss'
import Home from './js/components/home/home'

class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false,
      loggedInUserId: ''
    }
  }
  
componentDidMount(){
  this.userMenu();
}

  userMenu(){
    console.log("inside the userMenu code block");
    if (document.querySelector(".userMenuContent")) {
      let menuContent = document.querySelector(".userMenuContent");
      document.querySelector(".userMenuToggle").addEventListener("click", ()=>{
        console.log("Clicked on user menu toggle");
        menuContent.classList.contains("showMenu") ? menuContent.classList.remove("showMenu") : menuContent.classList.add("showMenu")
      })
    }
  }

  // signUp
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
              {/*<Route exact path='/' component={Home}/> *}
              {/* <Route path='/about' component={About}/> */}
              {/* <Route path='/services' component={Services}/> */}
              {/* <Route path='/contact' component={Contact}/> */}
              {/* <Route path='/blog' component={Blog}/> */}
              {/* <Route path='/gender' component={Gender}/> */}
              {/* <Route path='/drones' component={Drones}/> */}
              {/* <Route path='/software' component={Software}/> */}
          </Router>
          <div className="containerNav">
            <div className="headerRight">
            {
                (this.state.loggedIn) ? 
                  <li className="userMenu">
                    <div className="userMenuToggle">User Menu</div>
                    <ul className="userMenuContent">
                      <li href="http://apple.com">User Item 1</li>
                      <li>User Item 2</li>
                      <li>User Item 3</li>
                    </ul>
                  </li> 
                  :
                  <li className="signUp"><a href="/signup">Sign Up</a></li> 
              }
              
            </div>

            <div className="headerLeft">
              <li className="active"><a href="/">Home</a></li>
              <li><a href="#">About Us</a></li>
            </div>

          </div>
        </header>
        <div className="subNav">
          <li>Useful Info here</li>
        </div>
      </div>
    );
  }
}

export default App