import firebase from "firebase";
import { Button, Col, Container, Row, Navbar, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";

import {
  FirebaseDatabaseMutation
} from "@react-firebase/database";

const Dashboard = () => {

  const handleAddAp = async () => {
    const db = firebase.firestore()
    const doc = await db.collection("apartments").doc("12").set({
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    })

    console.log(doc)
  }

  return (
    <div>
      {/* <FirebaseDatabaseMutation path={'apartments/'} type="push">
        {({ runMutation }) => (
          <button
            data-testid="add-document"
            onClick={async () => {
              const { key } = await runMutation({ wow: 'wow' });
              if (key === null || typeof key === "undefined") return;

            }}
          >
            add-document-with-generated-key
          </button>
        )}
      </FirebaseDatabaseMutation> */}
      <Button onClick={handleAddAp}>Add ap</Button>
    </div>
  )
}

export default Dashboard;