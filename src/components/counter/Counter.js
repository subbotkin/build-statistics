import React from 'react'
import firebase from 'firebase'

class Counter extends React.Component {
  componentWillMount() {
    this.setState({
      isLoading: true,
      value: null
    });
    this.firebaseRef = firebase.database()
    var valueRef = this.firebaseRef.ref('value');
    valueRef.on('value', function(snapshot) {
      this.value = snapshot.val();
      this.setState({
        isLoading: false,
        value: this.value
      });
    }.bind(this));
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  render() {
    return <h1>{ this.state.isLoading 
      ? 'Loading'
      : 'Hello, ' + this.state.value }</h1>;
  }
}

export default Counter;