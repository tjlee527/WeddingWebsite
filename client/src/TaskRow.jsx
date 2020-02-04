import React from 'react';
import $ from 'jquery';

class TaskRow extends React.Component {
  constructor(props) {
    super(props);

    this.taskClicked = this.taskClicked.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }

  taskClicked(event) {
    let status = event.currentTarget.getAttribute('status');
    let description = event.currentTarget.getAttribute('desc');
    let id = event.currentTarget.getAttribute('id');
    this.toggleTask(id, description, status)
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
        this.props.getAllTasks();
      },
      error: (response) => {
        console.log(response)
      }
    })
  }


  render() {
    let done = this.props.task.status;
    let taskDescription = this.props.task.task;
    return (
      <div >
        <div id={this.props.id} status={done.toString()} desc={taskDescription} onClick={this.taskClicked}>{done == 'true' ? 'X ' : null}{taskDescription}</div>
      </div>
    )
  }
};

export default TaskRow;