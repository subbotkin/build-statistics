import React from 'react';
import PropTypes from 'prop-types'

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
      <select id="lang" onChange={this.updatePeriod} value={this.props.period}>
        <option value={0}>Total</option>
        <option value={1}>Day</option>
        <option value={2}>Week</option>
        <option value={3}>Month</option>
      </select>
      </div>
      <h1> {
        this.props.isFetching
        ? 'Loading'
        : 'Total build time: ' + formattedTime(this.props.buildTime)
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

Counter.propTypes = {
  buildTime: PropTypes.number,
  isFetching: PropTypes.bool.isRequired
}

export default Counter
