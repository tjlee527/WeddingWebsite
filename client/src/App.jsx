import React from 'react';
import $ from 'jquery';
import TaskContainer from './TaskContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }

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


  render(){
    return (
      <TaskContainer getAllTasks={this.getAllTasks} tasks={this.state.tasks}/>
    )
  }
}

export default App;