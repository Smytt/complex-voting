import { useParams } from "react-router-dom";
import { Tabs, Tab, Spinner, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase"
import Quorum from "./Quorum";
import Topics from "./Topics";
import { fetchMeeting } from "../redux/actions/meeting";

const Meeting = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [tab, setTab] = useState('quorum');
  const meeting: any = useSelector<any>(state => state.meeting)

  useEffect(() => {
    let unsub = () => { };
    dispatch(fetchMeeting(id, (unsubscribe) => unsub = unsubscribe))
    return () => unsub();
  }, [])

  return (
    <div>
      {
        meeting.loading
          ? 'loading........'
          : <Container className="my-4">
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
                      <Quorum />
                    </Tab>
                    <Tab eventKey="topics" title="Теми">
                      <Topics />
                    </Tab>
                  </Tabs>
                </div>
            }

          </Container>
      }
    </div>
  )
}

export default Meeting