import React, { Component } from 'react';
import axios from 'axios';
import './Quotes.scss';

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qod: null
    };
    // this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    axios.get('http://quotes.rest/qod.json?category=inspire')
      .then(response => {
        console.log(response);
        this.setState({qod:response.data});
        
      }).catch(error => {
      console.log(error);
      })
  }
  
  render() {
    console.log(this.state.qod);
    
    return(
      <div className="quote-container">
        <h2>{(this.state.qod)?this.state.qod.contents.quotes[0].title:null}</h2>
        <p>
          {(this.state.qod)?this.state.qod.contents.quotes[0].quote:null}
        </p>
        <p>
          --{(this.state.qod)?this.state.qod.contents.quotes[0].author:null}
        </p>
        <p>&copy; {(this.state.qod)?this.state.qod.contents.copyright:null}
        </p>
      </div>
    );
  }
}

export default Quotes

// data.value

// response.contents.quotes.quote

// {this.state.quote}