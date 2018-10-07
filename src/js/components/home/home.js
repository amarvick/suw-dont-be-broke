/* File Name: home.js                                           *                                   
 * Description: Home Page                                       */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import Quotes from './components/quotes'

import EventsCalendar from './components/eventsCalendar'

import '../../../stylesheets/home.scss'

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
      username: ''
    };
  }

  componentDidMount(){
    this.textLinkProgress();
  }

  textLinkProgress() {

  }

  handleClick(event){
    // document.querySelector(".progressInner").getAttribute("style", "width")
    let progressWidth = getComputedStyle(document.querySelector(".progressInner")).width.split("px")[0];
    console.log(Number(progressWidth)+50)
    document.querySelector(".progressInner").setAttribute("style", `width:${Number(progressWidth)+50}px`);
    document.querySelector(".progressPercent").innerText = `${(((Number(progressWidth)+10)/1130)*100).toFixed(2)}%`;
  } 

  render(props) {
    const { classes } = this.props;
    const style = {
      margin: 15,
    };

    return (
      <div className="containerMain">
      <div id="leftSide" className="container">
      <div id="progressBarHolder">
        <h2>Your Progress</h2>
        <div className="yourGoal">Your Goal: <span className="goalName">Budgeting</span><span className="editGoal">
          <a>Edit</a>
          </span>
        </div>
        <div className="progressBar">
          <div className="progressInner"><span className="progressPercent">50%</span></div>
        </div>
      </div>
        <Quotes />
        <div id="featuredItems">
          <h2>Featured Tasks</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tsin6TIle3A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <div className="featuredRight">
            <div className="featuredText">How does credit work?</div>
            <div className="featuredImage"><img src="./creditScore.png" /></div>
          </div>
        </div>
        <div id="textLinks">
          <div id="budgetingLinks" className="textLinkList">
            <h3>Budgeting</h3>
            <ul>
              <li>Item One</li>
              <li>Item Two</li>
              <li>Item Three</li>
            </ul>
          </div>
          
          <div id="investingLinks" className="textLinkList">
            <h3>Investing</h3>
            <ul>
              <li className="listItem" onClick={(event) => this.handleClick(event)}>Item One</li>
              <li>Item Two</li>
              <li>Item Three</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="rightSide">
        <EventsCalendar />
      </div>
      
      </div>
    )
  }
}

// We need an intermediary variable for handling the recursive nesting.
export default (Home)