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
      "First statistic about financial literacy",
      "Second statistic about financial literacy",
      "Third statistic about financial literacy"
    ]
    let results = Math.floor(Math.random() * quotes.length);
    console.log(quotes[results], results);
    return results;
  }

  render(props) {  
    return (
      <div>
        <h2>{this.randomQuote}</h2>
      </div>
    )
  }
}

// We need an intermediary variable for handling the recursive nesting.
export default (Quotes)