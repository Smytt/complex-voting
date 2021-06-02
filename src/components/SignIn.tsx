import React, { useEffect, useState } from "react";
import firebase from 'firebase'
import { Button, Container, Form } from "react-bootstrap";

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  useEffect(() => {
    console.log(firebase.auth().currentUser)
  }, [])
  
  return (
    <Container style={{width: "500px"}}>
      <h1>Моля, влезте в профила си.</h1>
      <Form>
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label>Парола</Form.Label>
          <Form.Control type="password" onChange={(e) => setPass(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={() => firebase.auth().signInWithEmailAndPassword(email, pass)}>
          Влез
        </Button>
      </Form>
    </Container>
  )
}

export default SignIn;
