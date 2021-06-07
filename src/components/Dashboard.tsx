import firebase from "firebase";
import { Button, Table, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchMeetings } from "../redux/actions/meetings";
import moment from "moment";
import { Link } from 'react-router-dom';
const Dashboard = () => {

  const dispatch = useDispatch();
  const [meetings, setMeetings] = useState<any>({ loading: true })

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('meetings')
      .onSnapshot((meetings) => {
        const docs = meetings.docs.map(doc => ({ id: doc.id, data: doc.data() }));
        console.log(docs)
        setMeetings({
          loading: false,
          all: docs
        })
      })

    return () => unsubscribe();
  }, [])

  return (
    <div>
      {
        meetings.loading
          ?
          <div className="text-center m-4">
            <Spinner animation="border" className="m-auto" variant="primary" />
          </div>
          :
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Име</th>
                <th>Дата</th>
                <th>Кворум</th>
                <th>Действие</th>
                <th>Експорт</th>
              </tr>
            </thead>
            <tbody>
              {
                meetings.all.map((meeting, i) => (
                  <tr key={i}>
                    <td>{meeting.data.name}</td>
                    <td>{moment(meeting.data.date).locale('bg').format('LL')}</td>
                    <td>{meeting.data.quorum.length}</td>
                    <td>{meeting.data.open
                      ? <Link to={`/meeting/${meeting.id}`}><Button size="sm">Старт</Button></Link>
                      : <Button size="sm" variant="secondary" disabled>Приключило</Button>}</td>
                    <td>{<Button size="sm" variant="success" disabled={meeting.data.open}>Протокол</Button>}</td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
      }

    </div>
  )
}

export default Dashboard;