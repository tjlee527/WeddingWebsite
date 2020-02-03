import React from 'react';
import $ from 'jquery';
import TaskContainer from './TaskContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [['eat food', false], ['clean room', true], ['wash dishes', false]]
    }

    this.toggleTask = this.toggleTask.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
    this.getAllTasks = this.getAllTasks.bind(this);
  }

  componentDidMount() {
    this.getAllTasks();
  }

  getAllTasks() {
    $.ajax({
      type: 'GET',
      url: '/tasks',
      success: (response) => {
        console.log(response);
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  toggleTask(id, desc, status) {
    let newStatus = (status === 'false' ? true : false);
    let newTasks = this.state.tasks.reduce((arr, task) => {
      arr.push([...task]);
      return arr;
    } ,[]);

    newTasks[id] = [desc, newStatus];
    this.setState({
      tasks: newTasks
    })
  }

  addNewTask(taskDesc) {
    let newTasks = this.state.tasks.reduce((arr, task) => {
      arr.push([...task]);
      return arr;
    } ,[]);

    newTasks.push([taskDesc, false]);
    this.setState({
      tasks: newTasks
    })
  }

  render(){
    return (
      <TaskContainer addNewTask={this.addNewTask} toggleTask={this.toggleTask} tasks={this.state.tasks}/>
    )
  }
}

export default App;