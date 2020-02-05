import React from 'react';
import CountDownForm from './CountDownForm.jsx';


class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 'March 21, 2020',
      daysLeft: ''
    }

    this.getCountdown = this.getCountdown.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  changeDate(newDate) {
    this.setState({
      date: newDate
    })
    this.getCountdown(newDate)
  }

  getCountdown(date){
    let countDownDate = new Date(date);
    let currentDate = new Date();
    let distance = countDownDate-currentDate;
    let daysLeft = Math.floor(distance/(1000*60*60*24));
    if (distance < 0) {
      daysLeft = 'already passed!'
    }
    if (distance == NaN) {
      daysLeft = 'Invalid Date'
    }

    this.setState({
      daysLeft: daysLeft.toString()
    })
  }

  componentDidMount() {
    this.getCountdown(this.state.date);
  }

  render() {
    return (
      <div>
        <div className='weddingDate'>{this.state.date}</div>
        <div>Countdown: {this.state.daysLeft}</div>
        <CountDownForm changeDate={this.changeDate} getCountdown={this.getCountdown}/>
      </div>
    )
  }
}

export default Countdown;