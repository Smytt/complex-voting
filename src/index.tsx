import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase/app';
import { FirebaseAuthConsumer, FirebaseAuthProvider } from '@react-firebase/auth';
import "firebase/auth";
import "firebase/database";

import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/SignIn';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const config = {
  apiKey: "AIzaSyBg49A4-rwUOkdAWEIv7k_4h6k4U3GTvxg",
  authDomain: "complex-voting.firebaseapp.com",
  projectId: "complex-voting",
  databaseURL: "https://complex-voting-default-rtdb.firebaseio.com/",
  storageBucket: "complex-voting.appspot.com",
  messagingSenderId: "129002144891",
  appId: "1:129002144891:web:50972f69a2954940b18ede"
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FirebaseAuthProvider firebase={firebase} {...config}>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user }) => {
            if (isSignedIn) return (
              <BrowserRouter>
                <App user />
              </BrowserRouter>
            )
            return <SignIn />
          }}
        </FirebaseAuthConsumer>
      </FirebaseAuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
