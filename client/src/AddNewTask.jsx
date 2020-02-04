import React from 'react';
import $ from 'jquery';

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }

  onInputChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    let newTask = this.state.value;
    this.addNewTask(newTask);
    this.setState({
      value: ''
    })
  }

  addNewTask(taskDesc) {
    $.ajax({
      type: 'POST',
      url: '/tasks',
      data: {
        desc: taskDesc,
        status: false
      },
      success: (response) => {
        this.props.getAllTasks();
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <label>
          Add New Task: <br></br>
          <input value={this.state.value} type='text' name='newTask' onChange={this.onInputChange}></input><br></br>
        </label>
        <input type='submit'></input>
      </form>
    );
  }
}

export default AddNewTask;