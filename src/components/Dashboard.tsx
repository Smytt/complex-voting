import firebase from "firebase";
import { Button, Col, Container, Row, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";

import {
  FirebaseDatabaseMutation
} from "@react-firebase/database";
import { allAreas, allProperties } from "../data/ideal-areas";

const Dashboard = () => {

  // const handleAddAp = async () => {
  //   const db = firebase.firestore();
  //   const batch = db.batch();
  //   allProperties().forEach(property => {
  //     batch.set(db.collection("properties").doc(property.name), property)
  //   })
  //   batch.commit().then(console.log).catch(console.error)
  // }

  return (
    <div>
      
    </div>
  )
}

export default Dashboard;