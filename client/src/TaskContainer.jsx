import React from 'react';
import TaskRow from './TaskRow.jsx';
import AddNewTask from './AddNewTask.jsx';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="taskContainer">
        < AddNewTask addNewTask={this.props.addNewTask}/>
        <h1>Task List</h1>
        <div>
          {this.props.tasks.map((task, index) => {
            return (
              < TaskRow key={index} id={index} task={task} toggleTask={this.props.toggleTask}/>
            )
          })}
        </div>
      </div>
    )
  }
}

export default TaskContainer;