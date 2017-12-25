import React from 'react';
import axios from 'axios';

class Counter extends React.Component {
  componentWillMount() {
    this.setState({
      isLoading: true,
      value: null
    });
    axios.get('https://alohabuildtime.herokuapp.com/builds')
      .then( (response) => {
        this.setState({
          isLoading: false,
          value: response.data.reduce((total, build) => total + build.buildTime, 0)
        });
      })
      .catch( (error) => {
        this.setState({
          isLoading: false,
          value: 'Error'
        });
      });
  }

  componentWillUnmount() {

  }

  render() {
    return <h1> { 
      this.state.isLoading 
      ? 'Loading'
      : 'Total build time: ' + formattedTime(this.state.value) 
    } </h1>;
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