import React, { Component } from 'react';
import Tasks from '../Tasks/Tasks';
import "./List.scss";

class List extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    // Add task to list
    this.addTask = this.addTask.bind(this);
    // Mark task as completed
    this.completedTask = this.completedTask.bind(this);
    // Mark task as deleted
    // this.deleteTask = this.deleteTask.bind(this);
  }

  onChange = event => {
    this.setState({ term: event.target.value });
  };

  addTask(event) {
    var taskArray = this.state.items;

    if (this.inputElement.value !== "") {
      taskArray.unshift({
        text: this.inputElement.value,
        key: Date.now(),
        completed: false
      });

      this.setState({
        items: taskArray
      });

      this.inputElement.value = "";
    }

    console.log(taskArray);

    event.preventDefault();
  }

  completeTask = (targetItem) => {

    targetItem.completed = true;
    
    let itemsArray = this.state.items;
    // replace target item in the state, which has all the items (using map)
    // let finishedArray = itemsArray.map((existingItem) => {
    //   if (existingItem.key === targetItem.key) {
    //     return targetItem;
    //   } else {
    //     return existingItem;
    //   }
    // });

    // (2nd method - using index to replace it directly)
    // find the item in the list of items
    let foundIndex = itemsArray.indexOf(targetItem);
    // if the item is in the array
    if (foundIndex >= 0) {
      // replace it
      itemsArray[foundIndex] = targetItem;
    }

    this.setState({
      items: itemsArray
    });
  }

  // remove task from list

  // deleteTask(key) {
  //   const filteredTasks = this.state.items.filter(items => 
  //     items.key !== key);
  //     this.setState ({
  //       items:filteredTasks
  //     })
  // }

  completedTask(index, event) {
    // place line through completed item
    this.setState(state => ({
      completed: { ...state.completed, [index]: !state.completed[index] }
    }));
  }

  render() {
    return (
      <div className="tasklist">
        <div className="tasklist__header">
          <form action="" method="get" id="formID" onSubmit={this.addTask}>
            <input className="tasklist__header--textfield" ref={(a) => this.inputElement = a} 
            type="text" name="task" id="task" placeholder="Do something!" required/>
            <button className= "tasklist__header--button" type="submit">Do it!</button>
            <script type="text/javascript">document.formID.task.focus();</script>
          </form>
        </div>
        <Tasks entry={this.state.items} delete={this.completedTask} completeHandler={this.completeTask}/>
      </div>
    );
  }
}

export default List
