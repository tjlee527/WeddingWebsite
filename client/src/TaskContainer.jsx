import React from 'react';
import TaskRow from './TaskRow.jsx';
import AddNewTask from './AddNewTask.jsx';
import DeleteTask from './DeleteTask.jsx';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="taskContainer">
        < AddNewTask getAllTasks={this.props.getAllTasks}/>
        <h1>Task List</h1>
        <div>
          {this.props.tasks.map((task, index) => {
            return (
              < TaskRow key={index} id={task._id} task={task} getAllTasks={this.props.getAllTasks}/>
            )
          })}
        </div>
        <br></br>
        <DeleteTask getAllTasks={this.props.getAllTasks} tasks={this.props.tasks}/>
      </div>
    )
  }
}

export default TaskContainer;