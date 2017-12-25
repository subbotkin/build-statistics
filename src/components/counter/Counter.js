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
    return <h1>{ this.state.isLoading 
      ? 'Loading'
      : new Date(this.state.value * 1000).toISOString().substr(11, 8)}</h1>;
  }
}

export default Counter;