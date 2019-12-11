import React, { Component } from 'react';
import axios from 'axios';
import './Quotes.scss';

class Quotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qod: null
    };
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
      <div className="quotes-container">
        <div className="quotes-container__details">
          {/* <h2>{(this.state.qod)?this.state.qod.contents.quotes[0].title:null}</h2> */}
          <h2 className="quotes-container__details--header">Today's quote</h2>
          <p>
            {(this.state.qod)?this.state.qod.contents.quotes[0].quote:null}
          </p>
          <p>
            --{(this.state.qod)?this.state.qod.contents.quotes[0].author:null}
          </p>
          <p>&copy; {(this.state.qod)?this.state.qod.contents.copyright:null}
          </p>
        </div>
      </div>
    );
  }
}

export default Quotes