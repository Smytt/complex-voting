import './App.css';
import firebase from 'firebase'
import { useEffect, useState } from 'react';

function App() {

  // const [user, setUser] = useState<firebase.User | null>(null);
  var provider = new firebase.auth.EmailAuthProvider();
  firebase.auth().signInWithPopup(provider)

  return (
    <p>Hi!</p>
  )
}

export default App;
