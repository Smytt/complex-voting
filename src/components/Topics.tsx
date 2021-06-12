import { useState } from "react";
import { Button, FormControl, Accordion, Card, Form, InputGroup } from "react-bootstrap";
import VotingTable from "./VotingTable";
import firebase from "firebase";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Topics = () => {
  const { id } = useParams();
  const topics: any = useSelector<any>(state => state.meeting.data.topics)
  const [newTopic, setNewTopic] = useState('')

  const handleAddTopic = () => {

    topics[topics.length - 1]!.text = newTopic;
    topics.push({
      position: topics.length + 1,
      text: ''
    })

    firebase.firestore().collection('meetings').doc(id)
      .update({
        topics: [...topics]
      })
  }

  return (
    <div>

      <Accordion defaultActiveKey="0">
        {
          topics.slice(0, topics.length - 1).map(topic => (
            <Card key={topic.position}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={topic.position}>
                  {topic.position}. {topic.text.length > 80 ? topic.text.substr(0, 80) + '...' : topic.text}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={topic.position}>
                <Card.Body>
                  <p><strong>Въпрос:</strong> {topic.text}</p>
                  <VotingTable topic={topic}/>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))
        }
      </Accordion>
      <Form className="my-2">
        <Form.Label>Допълнителен въпрос:</Form.Label>
        <InputGroup>
          <FormControl type="text" placeholder="Въпрос..." value={newTopic} onChange={(e) => setNewTopic(e.target.value)} />
          <Button onClick={() => handleAddTopic()}>Добави</Button>
        </InputGroup>
      </Form>
    </div>
  )
}

export default Topics