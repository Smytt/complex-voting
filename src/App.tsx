import './App.css';
import firebase from 'firebase'
import React, { useEffect, useState } from 'react';
import { FirebaseAuthConsumer, IfFirebaseAuthed, IfFirebaseAuthedAnd, IfFirebaseUnAuthed } from '@react-firebase/auth';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom';
import NewMeeting from './components/NewMeeting';

function App({ user }) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
          <Link to="/">
        <Navbar.Brand>
          Соната 378
          </Navbar.Brand>
          </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link className="mr-auto" to="/add-meeting">
            <Button variant="outline-secondary">Ново ОС</Button>
          </Link>
          <Button variant="outline-success" onClick={() => firebase.auth().signOut()}>Изход</Button>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/" component={Dashboard} exact />
        <Route path="/add-meeting" component={NewMeeting} />
      </Switch>
    </div>
  )
}

export default App;
