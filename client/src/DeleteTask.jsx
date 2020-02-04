import React from 'react';
import $ from 'jquery';

class DeleteTask extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.state.value) {
      $.ajax({
        type: 'DELETE',
        url: `/tasks/item/${this.state.value}`,
        data: {
          id: this.state.value
        },
        success: () => {
          this.props.getAllTasks();
        },
        error: (response) => {
          console.log(response)
        }
      })
    }
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          Delete Item: <br></br>
          <select value={this.state.value} onChange={this.handleChange}>
            <option></option>
            {this.props.tasks.map((task) => {
              return (
                <option id={task._id} value={task._id} key={task._id}>{task.task}</option>
              )
            })}
          </select>
        </label>
        <input type='submit' value='submit'></input>
      </form>
    )
  }
}

export default DeleteTask;