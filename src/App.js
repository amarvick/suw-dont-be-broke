import React, { Component, StartupActions } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'

// Import components here
import Navbar from './js/components/navbar'
import Home from './js/components/home/home'
import About from './js/components/about/about'

import './stylesheets/nav.scss'

// Import actions here
import { fetchUser } from './js/actions/userActions'

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
    // console.log("inside the userMenu code block");
    // if (document.querySelector(".userMenuContent")) {
    //   let menuContent = document.querySelector(".userMenuContent");
    //   document.querySelector(".userMenuToggle").addEventListener("click", ()=>{
    //     console.log("Clicked on user menu toggle");
    //     menuContent.classList.contains("showMenu") ? menuContent.classList.remove("showMenu") : menuContent.classList.add("showMenu")
    //   })
    // }
  }

  // signUp
  

  render() {
    let user = this.props.user || {}

    return (
      <div className="App">
        <header className="App-header">
          <Router>
              {/*<Route exact path='/' component={Home}/> */}
              {/* <Route path='/about' component={About}/> */}
              {/* <Route path='/services' component={Services}/> */}
              {/* <Route path='/contact' component={Contact}/> */}
              {/* <Route path='/blog' component={Blog}/> */}
              {/* <Route path='/gender' component={Gender}/> */}
              {/* <Route path='/drones' component={Drones}/> */}
              {/* <Route path='/software' component={Software}/> */}
          </Router>
          <div className="containerNav">
            <Navbar />
            {/* <div className="headerRight"> */}
              {/* { !this.state.loggedIn ? 
                <Navbar />
                :
                <li className="signUp"><a href="/signup">Sign Up</a></li> 
              } */}
              
            {/* </div> */}

            {/* <div className="headerLeft">
              <li className="active"><a href="/">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li></li>
            </div> */}

          </div>
        </header>

        <div className="subNav">
          <li>Useful Info here</li>
        </div>
      </div>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
// Mapping dispatch actions to the props
const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  startup: () => dispatch(StartupActions.startup()),
  fetchUser: () => dispatch(fetchUser())
})

// Maps the state in to props (for displaying on the front end)
const mapStateToProps = (state) => ({
  user: state.user.user
})

export default connect(mapStateToProps, mapDispatchToProps)(App)