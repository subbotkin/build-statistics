import React from 'react';
import PropTypes from 'prop-types'

class Counter extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount()
  }

  render() {
    return <div>
      <div>

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
