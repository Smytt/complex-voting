import { useParams } from "react-router-dom";
import { Tabs, Tab, Spinner, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "firebase"
import Quorum from "./Quorum";
import Topics from "./Topics";

const Meeting = () => {
  const { id } = useParams();
  const [tab, setTab] = useState('quorum');
  const [meeting, setMeeting] = useState<any>({ loading: true })

  useEffect(() => {
    firebase.firestore().collection('meetings').doc(id)
      .onSnapshot(doc => {
        setMeeting({ data: doc.data(), loading: false })
      })
  }, [id])

  return (
    <Container className="my-4">
      {
        meeting.loading
          ?
          <div className="text-center m-4">
            <Spinner animation="border" className="m-auto" variant="primary" />
          </div>
          :
          <div>
            <h1>{meeting.data.name}</h1>
            <Tabs
              id="controlled-tab-example"
              activeKey={tab}
              onSelect={(k) => setTab(k || 'quorum')}
              className="mb-3"
            >
              <Tab eventKey="quorum" title="Кворум">
                <Quorum quorum={meeting.data.quorum} />
              </Tab>
              <Tab eventKey="topics" title="Теми">
                <Topics topics={meeting.data.topics}/>
              </Tab>
            </Tabs>
          </div>
      }

    </Container>
  )
}

export default Meeting