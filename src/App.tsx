import './App.css';
import firebase from 'firebase'
import Dashboard from './components/Dashboard';
import { Button, Navbar } from 'react-bootstrap';
import { Route, HashRouter, Link } from 'react-router-dom';
import NewMeeting from './components/NewMeeting';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProperties } from './redux/actions/properties';
import Properties from './components/Properties';
import Meeting from './components/Meeting';
import { allProperties } from './data/ideal-areas';

function App({ user }) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProperties())
  }, [])

  return (
    <div>
      <Navbar bg="light">
        <Link to="/#">
          <Navbar.Brand>
            Соната 378
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Link className="mr-auto" to="/#/add-meeting">
            <Button variant="outline-secondary">Ново ОС</Button>
          </Link>
          <Link className="mr-auto" to="/#/properties">
            <Button variant="outline-secondary">Списък с имоти</Button>
          </Link>
          <Button variant="outline-success" onClick={() => firebase.auth().signOut()}>Изход</Button>
        </Navbar.Collapse>
      </Navbar>
      <HashRouter basename="/">
        <Route path="/" component={Dashboard} exact />
        <Route path="/properties" component={Properties} exact />
        <Route path="/add-meeting" component={NewMeeting} />
        <Route path="/meeting/:id" component={Meeting} />
      </HashRouter>

    </div>
  )
}

export default App;
