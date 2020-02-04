import React from 'react';
import $ from 'jquery';
import TaskContainer from './TaskContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }

    this.toggleTask = this.toggleTask.bind(this);
    // this.addNewTask = this.addNewTask.bind(this);
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
    let newStatus = (status == 'false' ? true : false);
    let newTaskObj = {
      id: id,
      task: desc,
      status: newStatus
    }

    $.ajax({
      type: 'PUT',
      url: `/tasks/item/${id}`,
      data: newTaskObj,
      success: (response) => {
        this.getAllTasks();
      },
      error: (response) => {
        console.log(response)
      }
    })
  }



  render(){
    return (
      <TaskContainer getAllTasks={this.getAllTasks} toggleTask={this.toggleTask} tasks={this.state.tasks}/>
    )
  }
}

export default App;