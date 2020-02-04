import React from 'react';
import $ from 'jquery';
import TaskContainer from './TaskContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   tasks: [['eat food', false], ['clean room', true], ['wash dishes', false]]
    // }
    this.state = {
      tasks: []
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
        this.setState((prevState) => {
          return ({
            tasks: response
          })
        })
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  toggleTask(id, desc, status) {
    // console.log(typeof status)
    let newStatus = (status == 'false' ? true : false);
    let newTaskObj = {
      id: id,
      task: desc,
      status: newStatus
    }
    // console.log(newTaskObj);

    $.ajax({
      type: 'PUT',
      url: `/tasks/item/${id}`,
      data: newTaskObj,
      success: (response) => {
        // console.log(response);
        this.getAllTasks();
      },
      error: (response) => {
        console.log(response)
      }
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