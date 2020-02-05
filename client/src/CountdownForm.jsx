import React from 'react';

class CalendarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      day: '',
      year: ''
    }

    this.onChangeMonth = this.onChangeMonth.bind(this);
    this.onChangeDay = this.onChangeDay.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeMonth(event) {
    this.setState({
      month: event.target.value
    })
  }

  onChangeDay(event) {
    this.setState({
      day: event.target.value
    })
  }

  onChangeYear(event) {
    this.setState({
      year: event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    let date = `${this.state.month} ${this.state.day}, ${this.state.year}`
    this.props.changeDate(date);
  }

  render() {
    let days = ['Day'];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }

    let months = [ 'Month','Jan', 'Feb', "Mar", 'April', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let years = ['Year'];
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear()
    for (let z = currentYear; z <= currentYear + 10; z++) {
      years.push(z);
    }

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Enter Date: <br></br>
            <select onChange={this.onChangeMonth}>
              {months.map((month, index) => {
                return (
                  <option value={month} key={index}>{month}</option>
                )
              })}
            </select>
            <select onChange={this.onChangeDay}>
              {days.map((day, index) => {
                return (
                  <option value={day} key={index}>{day}</option>
                )
              })}
            </select>
            <select onChange={this.onChangeYear}>
              {years.map((year, index) => {
                return (
                  <option value={year} key={index}>{year}</option>
                )
              })}
            </select>
          </label>
          <input type='submit' value='submit'></input>
        </form>
      </div>
    )
  }
}

export default CalendarForm;