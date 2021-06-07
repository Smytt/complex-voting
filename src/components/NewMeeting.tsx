import React, { useState } from "react"
import { Form, Button, Container, InputGroup, FormControl } from "react-bootstrap"
import firebase from "firebase"
import { useHistory } from "react-router-dom";
import moment from "moment";

const NewMeeting = () => {
  const history = useHistory()
  const [name, setName] = useState('')
  const [date, setDate] = useState('');
  const [topics, setTopics] = useState([{ position: 1, text: '' }]);

  const handleSubmitNewMeeting = async () => {
    try {
      await firebase.firestore().collection('meetings').doc(name.replace(/ /g, '-')).set({
        name,
        date: moment(date).format('DD-MM-YYYY'),
        open: true,
        quorum: [],
        topics
      })
      history.push("/");
    } catch (e) {
      console.error(e)
    }
  }

  const handleTopicChange = (e, position) => {
    if (topics) {
      topics.find(topic => topic.position === position)!.text = e.target.value;
      if (position === topics.length) {
        topics.push({
          position: topics.length + 1,
          text: ''
        })
      }
      setTopics([...topics])
    }
  }

  const handleMoveDown = (e, position) => {
    const matchedTopic = topics.find(topic => topic.position === position);
    const nextTopic = topics.find(topic => topic.position === position + 1);
    matchedTopic!.position = matchedTopic!.position + 1;
    nextTopic!.position = nextTopic!.position - 1;
    setTopics([...topics.sort((a, b) => a.position < b.position ? -1 : 1)])
  }


  const handleMoveUp = (e, position) => {
    const matchedTopic = topics.find(topic => topic.position === position);
    const previousTopic = topics.find(topic => topic.position === position - 1);
    matchedTopic!.position = matchedTopic!.position - 1;
    previousTopic!.position = previousTopic!.position + 1;
    setTopics([...topics.sort((a, b) => a.position < b.position ? -1 : 1)])
  }

  return (
    <Container className="my-4">
      <h1>Добавяне на ново ОС</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Име</Form.Label>
          <Form.Control type="text" placeholder="Име на ОС" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Дата</Form.Label>
          <Form.Control type="text" placeholder="Дата за провеждане на ОС" onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <h2>Теми:</h2>
        {
          topics.map(topic => (
            <InputGroup key={topic.position} className="mb-3">
              <InputGroup.Text>{topic.position} </InputGroup.Text>
              <FormControl type="text" value={topic.text} onChange={(e) => handleTopicChange(e, topic.position)} />
              <Button variant="primary"
                onClick={(e) => { handleMoveUp(e, topic.position) }}
                disabled={topic.position === 1 || topic.position === topics.length}>
                &uarr;
              </Button>
              <Button variant="primary"
                onClick={(e) => { handleMoveDown(e, topic.position) }}
                disabled={topic.position >= topics.length - 1}>
                &darr;
              </Button>
            </InputGroup>
          ))
        }
        <Button variant="primary" onClick={handleSubmitNewMeeting} disabled={!name}>Запази</Button>
      </Form>
    </Container>
  )
}

export default NewMeeting