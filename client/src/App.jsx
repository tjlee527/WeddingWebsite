import React from 'react';
import TaskContainer from './TaskContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [['eat food', false], ['clean room', false], ['wash dishes', false]]
    }
  }
  render(){
    return (
      <TaskContainer tasks={this.state.tasks}/>
    )
  }
}

export default App;