import React, { Component, StartupActions } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'

// Import components here
import Navbar from './js/components/navbar'
import Home from './js/components/home/home'
import About from './js/components/about/about'

// Import actions here
import { fetchUser } from './js/actions/userActions'

class App extends Component {
  constructor() {
    super()
    // 'goodResponse' will change based off of the backend and will determine whether to display the login screen or the user's account
    // will probably want to put this in using redux state
    var goodResponse

    this.state = {
      loggedIn: goodResponse ? true : false
    }
  }

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
    let user = this.props.user || {}

    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
          { user == null &&

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

          { user != null && 
            <Router>
              <div>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
              </div>
            </Router>
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(App);