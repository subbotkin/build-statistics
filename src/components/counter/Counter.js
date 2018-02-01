import React from 'react';
import PropTypes from 'prop-types'
import './Counter.css';

class Counter extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount()
  }

  updatePeriod = (event) => {
    this.props.onPeriodChanged(event.target.value)
  }

  render() {
    return <div>
      <div>
      <select className="Counter period-select" onChange={this.updatePeriod} value={this.props.period}>
        <option value={0}>Total</option>
        <option value={1}>Day</option>
        <option value={2}>Week</option>
        <option value={3}>Month</option>
      </select>
      </div>
      <h1> {
        this.props.isFetching
        ? 'Загрузка'
        : 'Денег прокомпилено: ' + calculateCost(this.props.buildTime)
      } </h1>
      <h1> {
        this.props.isFetching
        ? ''
        : 'А вот на iMac Pro с 18 ядрами это бы стоило: ' + calculateMacProCost(this.props.buildTime)
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

function calculateCost(totalSeconds) {
  return '€' + (totalSeconds * 25 / 60 / 60).toFixed(2);
}

function calculateMacProCost(totalSeconds) {
  return '€' + (totalSeconds * 25 / 60 / 60 / 4.5).toFixed(2);
}

Counter.propTypes = {
  buildTime: PropTypes.number,
  isFetching: PropTypes.bool.isRequired
}

export default Counter
