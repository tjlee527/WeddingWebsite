import React from 'react';

class TaskRow extends React.Component {
  constructor(props) {
    super(props);

    this.taskClicked = this.taskClicked.bind(this);
  }

  taskClicked(event) {
    // console.log(event.currentTarget);
    let status = event.currentTarget.getAttribute('status');
    let description = event.currentTarget.getAttribute('desc');
    let id = event.currentTarget.getAttribute('id');
    console.log(status, description, id);
    this.props.toggleTask(id, description, status)
  }

  render() {
    let done = this.props.task.status;
    console.log(done)
    let taskDescription = this.props.task.task;
    return (
      <div >
        <div id={this.props.id} status={done.toString()} desc={taskDescription} onClick={this.taskClicked}>{done == 'true' ? 'X ' : null}{taskDescription}</div>
      </div>
    )
  }
};

export default TaskRow;