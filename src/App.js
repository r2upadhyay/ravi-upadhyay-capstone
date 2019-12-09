import React, {Component} from 'react';
import './App.css';
// import './App.scss';
import Header from './components/Header/Header';
import List from './components/List/List';
import Tasks from './components/Tasks/Tasks';
import Quotes from './components/Quotes/Quotes';
import Weather from './components/Weather/Weather';

// var destination = document.querySelector("#container");

class App extends Component {
  render() {
  return (
    <div>
      <Header />
      <div className='tasks-container'>
        <List />
        <Tasks />
      </div>
      <div className='sidebar'>
        <Quotes className='sidebar__block' />
        <Weather className='sidebar__block' />
      </div>
    </div>
  );
  }
}

export default App;
