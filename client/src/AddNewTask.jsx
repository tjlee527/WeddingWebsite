import React from 'react';

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    let newTask = this.state.value;
    this.props.addNewTask(newTask);
    this.setState({
      value: ''
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