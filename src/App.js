import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Tasks from './components/Tasks/Tasks';
import Quotes from './components/Quotes/Quotes';

// var destination = document.querySelector("#container");

class App extends Component {
  render() {
  return (
    <div>
      <Header />
      <List />
      <Tasks />
      <Quotes />
    </div>
  );
  }
}

export default App;
