import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Counter from './components/counter/Counter'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCwO7IQ3i7DEOlzR5n1KKHcqMnlwZDQ1Pc',
  authDomain: 'build-statistics.firebaseapp.com',
  databaseURL: 'https://build-statistics.firebaseio.com',
  storageBucket: 'build-statistics.appspot.com'
}


firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();