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
    document.querySelector("#articleModal").classList.add("showModal");
    
    document.querySelector("#articleModal").addEventListener("click", ()=>{
      document.querySelector("#articleModal").classList.remove("showModal");
      let progressWidth = getComputedStyle(document.querySelector(".progressInner")).width.split("px")[0];
      console.log(Number(progressWidth)+50)
      document.querySelector(".progressInner").setAttribute("style", `width:${Number(progressWidth)+50}px`);
      document.querySelector(".progressPercent").innerText = `${(((Number(progressWidth)+10)/1130)*100).toFixed(0)}%`;
    });
  }
  
  learningClick(event){
    document.querySelector("#learningModal").classList.add("showModal");
    
    document.querySelector(".modalWindow").addEventListener("click", ()=>{
      document.querySelector(".modalWindow").classList.remove("showModal");
    });
  }

  render(props) {
    const { classes } = this.props;
    const style = {
      margin: 15,
    };

    return (
      <div className="containerMain">
      <div className="modalWindow" id="learningModal">
        <div id="pathProgress">
        <h2>Your Learning Path Progress</h2>
          <div className="circle"><img src="./p1.jpg" /></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>

          <div className="yourGoal">Your Goal: <span className="goalName">Budgeting</span><span className="editGoal">
            <a>Edit</a>
            </span>
          </div>
        </div>
      </div>
      <div className="modalWindow" id="articleModal">
        <div className="modalInner">
          <div></div>
          <img src="./article2.jpg" />
        </div>
      </div>
      <div id="leftSide" className="container">
      <div id="progressBarHolder">
        <h2>Your Progress</h2>
        <div className="yourGoal">Your Goal: <span className="goalName">Budgeting</span><span className="editGoal">
          <a>Edit</a>
          </span>
        </div>
        <div className="learningPath" onClick={(event) => this.learningClick(event)}>View Learning Path...</div>
        <div className="progressBar">
          <div className="progressInner"><span className="progressPercent">50%</span></div>
          <div className="progressBarMessage">Great Work! 🎉</div>
        </div>
      </div>
        <div id="featuredItems">
          <h2>Featured Goals</h2>
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
              <li>Article One</li>
              <li>Article Two</li>
              <li>Article Three</li>
            </ul>
          </div>
          
          <div id="investingLinks" className="textLinkList">
            <h3>Investing</h3>
            <ul>
              <li className="listItem" onClick={(event) => this.handleClick(event)}>Article One</li>
              <li>Article Two</li>
              <li>Article Three</li>
            </ul>
          </div>
          
          <div id="debtLinks" className="textLinkList">
            <h3>Reducing Debt</h3>
            <ul>
              <li className="listItem" onClick={(event) => this.handleClick(event)}>Article One</li>
              <li>Article Two</li>
              <li>Article Three</li>
            </ul>
          </div>

          <div id="debtLinks" className="textLinkList">
            <h3>Retirement Planning</h3>
            <ul>
              <li className="listItem" onClick={(event) => this.handleClick(event)}>Article One</li>
              <li>Article Two</li>
              <li>Article Three</li>
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