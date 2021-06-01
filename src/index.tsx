import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';

const config = {
  apiKey: "AIzaSyBg49A4-rwUOkdAWEIv7k_4h6k4U3GTvxg",
  authDomain: "complex-voting.firebaseapp.com",
  projectId: "complex-voting",
  storageBucket: "complex-voting.appspot.com",
  messagingSenderId: "129002144891",
  appId: "1:129002144891:web:50972f69a2954940b18ede"
};

firebase.initializeApp(config)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
