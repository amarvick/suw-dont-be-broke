import React, { Component } from 'react';

class Quotes extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){
    this.randomQuote();
  }
  
  randomQuote(){
    let quotes = [
      "'If you born poor, it's not your mistake. But if you die poor, it's your mistake.' - Bill Gates",
      "'Poverty is the root of all evil.' - Les Brown",
      "'The best way to teach your kids about taxes is by eating 30% of their ice cream.' - Bill Murray"
    ]
    let index = Math.floor(Math.random() * quotes.length);
    console.log(quotes[index], index);
    return quotes[index];
  }

  render(props) {
    return (
      <div>
        <h2>{this.randomQuote()}</h2>
      </div>
    )
  }
}

// We need an intermediary variable for handling the recursive nesting.
export default (Quotes)