import React, { Component, StartupActions } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'

// Import components here
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

  componentWillMount() {
    // this.props.dispatch(fetchUser());
  }

  render() {
    let user = this.props.user || {}

    return (
      <div className="App">
        <header className="App-header">
          { user != null && 
            <Router>
              <div>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
              </div>
            </Router>
          }
        </header>
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