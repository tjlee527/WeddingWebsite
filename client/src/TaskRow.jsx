import React from 'react';

class TaskRow extends React.Component {
  constructor(props) {
    super(props);

    this.taskClicked = this.taskClicked.bind(this);
  }

  taskClicked(event) {
    let status = event.currentTarget.getAttribute('status');
    let description = event.currentTarget.getAttribute('desc');
    let id = event.currentTarget.getAttribute('id');
    this.props.toggleTask(id, description, status)
  }

  render() {
    let done = this.props.task[1];
    let taskDescription = this.props.task[0];
    return (
      <div >
        <div id={this.props.id} status={done.toString()} desc={taskDescription} onClick={this.taskClicked}>{done ? 'X ' : null}{taskDescription}</div>
      </div>
    )
  }
};

export default TaskRow;