import React from 'react';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="taskContainer">
        <h1>Task List</h1>
        <ul>
          {/* <li>yes</li> */}
          {this.props.tasks.map((task, index) => {
            return (
              <li key = {index}>{task[0]}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default TaskContainer;