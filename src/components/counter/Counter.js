import React from 'react';
import axios from 'axios';

var PERIOD = {
  TOTAL : 0,
  DAY : 1, 
  WEEK : 2, 
  MONTH : 3,

  properties: {
    0: {name: "Total", query: null},
    1: {name: "Day", query: "day"},
    2: {name: "Week", query: "week"},
    3: {name: "Month", query: "month"}
  }
};

class Counter extends React.Component {
  componentWillMount() {
    this.setState({
      isLoading: true,
      value: null,
      period: PERIOD.TOTAL.value
    });
  }

  componentDidMount() {
    this.load();
  }

  componentDidUpdate() {
    if (this.state.isLoading) {
      this.load();
    }
  }

  load = () => {
    let queryParameters = {
      0 : null,
      1 : "day",
      2 : "week",
      3 : "month"
    }

    let query = 'https://alohabuildtime.herokuapp.com/builds?' + (queryParameters[this.state.period] ? (queryParameters[this.state.period] + '=' + this.currentDay()) : '');
    axios.get(query)
      .then( (response) => {
        this.setState({
          isLoading: false,
          value: response.data.reduce((total, build) => total + build.buildTime, 0)
        });

        console.log(response.data.size);
      })
      .catch( (error) => {
        this.setState({
          isLoading: false,
          value: 'Error'
        });
      });
  }

  currentDay = () => {
    var dateFormat = require('dateformat');
    var now = new Date();

    return dateFormat(now, "dd-mm-yyyy");
  }

  updatePeriod = (event) => {
    this.setState({
      isLoading: true,
      value: 'Error',
      period: event.target.value
    });
  }

  render() {
    return <div>
    <div>
      <select id="lang" onChange={this.updatePeriod} value={this.state.period}>
        <option value={PERIOD.TOTAL}>Total</option>
        <option value={PERIOD.DAY}>Day</option>
        <option value={PERIOD.WEEK}>Week</option>
        <option value={PERIOD.MONTH}>Month</option>
      </select>
    </div>
    <h1> { 
      this.state.isLoading 
      ? 'Loading'
      : 'Total build time: ' + formattedTime(this.state.value) 
    } </h1>
    </div>
  }
}

function formattedTime(totalSeconds) {
  var hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;

  return (hours > 0 ? hours + ' hours, ' : '') +
         (minutes > 0 ? minutes + ' minutes, ' : '') +
         (seconds > 0 ? seconds + ' seconds' : '')
}  

export default Counter;