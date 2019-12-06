import React, { Component } from 'react';
import './Tasks.scss';
import FlipMove from 'react-flip-move';

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.createTask = this.createTask.bind(this);
  }

  // delete(key) {
  //   this.props.delete(key);
  // }


  createTask(item) {
    return (
      <li
        className={`specificTask ${item.completed ? 'strike' : ''}`}
        key= {item.key}
        onClick={() => { this.props.completeHandler(item); }}>
        {item.text}
      </li>
    );
  }
  // class="specificTask strike"
  // class="specificTask"

  render() {
    if (!this.props.entry){
      return null
    }
    var taskEntry = this.props.entry;
    var listItems = taskEntry.map(this.createTask);
    
    return (
      <div className="list">
        <ul className="list__items">
          <FlipMove duration={250} easing="ease-out">
            {listItems}
          </FlipMove>
        </ul>
      </div>
    );
  }
};

export default Tasks
