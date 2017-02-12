import React, { Component } from 'react';
import './App.css';

class Clock extends Component{

  constructor(props) {
   super(props);
   this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  //console.log('this.props', this.props); // deadline = {this.state.deadline} passed from parents into props
  }


 // lifecycle hook
  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

 // lifecycle hook - runs after the component has completely rendered on the apllication
  componentDidMount() { // getTimeUntil is called every second in order to continue updating the displayed timer
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
   //console.log('time',time);
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({days:days, hours, minutes, seconds});
  }

  render(){
    //this.getTimeUntil(this.props.deadline);

    return (
       <div>
         <div className = "Clock-days">{this.state.days} days</div>
         <div className = "Clock-hours">{this.state.hours} hours</div>
         <div className = "Clock-minutes">{this.state.minutes} minutes</div>
         <div className = "Clock-seconds">{this.state.seconds} seconds</div>
       </div>
    )

  }


}

export default Clock;
