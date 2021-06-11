import { useEffect, useReducer, useState } from "react"
import { useParams } from "react-router-dom";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { calculatePercentage, mapPropertiesByApNumber } from "../utils";
import { Button, Table, Spinner, Container, ToggleButton, ProgressBar, Col, Row } from "react-bootstrap";
import ButtonWithLoading from "./ButtonWithLoading";
import { entranceMaps } from "../data/ideal-areas";
import { SET_AGAINST, SET_REFRAINED, SET_SUPPORTED } from "../redux/actions/types";


const VotingTable = ({ topic }) => {
  const { id } = useParams();
  const quorum: any = useSelector<any>(state => state.meeting.data.quorum)
  const properties: any = useSelector<any>(state => state.properties.all.filter(property => quorum.includes(property.name)))
  const topics: any = useSelector<any>(state => state.meeting.data.topics)
  const propertiesByNumber: any = useSelector<any>(state =>
    mapPropertiesByApNumber(state.properties.all
      .filter(property => state.meeting.data.quorum.some(propertyName => propertyName === property.name))
    )
  )

  const initialVotes: any = useSelector<any>(state => ({
    supported: topic.votes?.supported || [],
    against: topic.votes?.against || [],
    refrained: topic.votes?.refrained || state.meeting.data.quorum
  }))

  const [votes, dispatchVotes] = useReducer((state, action) => {
    console.log(action)
    switch (action.type) {
      case SET_SUPPORTED: return {
        supported: [...state.supported, ...action.payload],
        against: state.against.filter(property => !action.payload.includes(property)),
        refrained: state.refrained.filter(property => !action.payload.includes(property)),
      }
      case SET_AGAINST: return {
        supported: state.supported.filter(property => !action.payload.includes(property)),
        against: [...state.against, ...action.payload],
        refrained: state.refrained.filter(property => !action.payload.includes(property)),
      }
      case SET_REFRAINED: return {
        supported: state.supported.filter(property => !action.payload.includes(property)),
        against: state.against.filter(property => !action.payload.includes(property)),
        refrained: [...state.refrained, ...action.payload],
      }
      default: return state;
    }
  }, initialVotes)


  useEffect(() => {
    const newQuorum = quorum.filter(oneProperty =>
      !votes.supported.includes(oneProperty) &&
      !votes.against.includes(oneProperty) &&
      !votes.refrained.includes(oneProperty))
    if (newQuorum.length > 0) {
      dispatchVotes({ type: SET_REFRAINED, payload: newQuorum })
    }

  }, [quorum])

  const handleSave = async () => {
    topics.find(oneTopic => oneTopic.position === topic.position).votes = votes
    await firebase.firestore().collection('meetings').doc(id)
      .update({
        topics: [...topics]
      })
  }

  const SetButtonColor = (propertyName) => {
    if (votes.supported.includes(propertyName)) return 'success'
    if (votes.against.includes(propertyName)) return 'danger'
    if (votes.refrained.includes(propertyName)) return 'warning'
  }

  const handleVote = (propertyName) => {
    if (votes.supported.includes(propertyName)) {
      dispatchVotes({ type: SET_AGAINST, payload: [propertyName] })
      return;
    }
    if (votes.against.includes(propertyName)) {
      dispatchVotes({ type: SET_REFRAINED, payload: [propertyName] })
      return;
    }
    if (votes.refrained.includes(propertyName)) {
      dispatchVotes({ type: SET_SUPPORTED, payload: [propertyName] })
      return;
    }
  }

  const percentageSupported = calculatePercentage(properties, votes.supported) || 0
  const percentageAgainst = calculatePercentage(properties, votes.against) || 0
  const percentageRefrained = calculatePercentage(properties, votes.refrained) || 0

  return (
    <div>
      <ProgressBar striped variant='success' className="my-2" now={percentageSupported} label={`ЗА - ${percentageSupported}%`} />
      <ProgressBar striped variant='danger' className="my-2" now={percentageAgainst} label={`ПРОТИВ - ${percentageAgainst}%`} />
      <ProgressBar striped variant='warning' className="my-2" now={percentageRefrained} label={`ВЪЗДЪРЖАЛ СЕ - ${percentageRefrained}%`} />
      <ButtonWithLoading text={"Запази"} handler={handleSave} />
      <Row className="my-2">
        <Col>
          <Button className='w-100' variant="success" onClick={() => dispatchVotes({ type: SET_SUPPORTED, payload: quorum })}>100% <strong>"ЗА"</strong></Button>
        </Col>
        <Col>
          <Button className='w-100' variant="warning" onClick={() => dispatchVotes({ type: SET_REFRAINED, payload: quorum })}>100% <strong>"ВЪЗДЪРЖАЛ СЕ"</strong></Button>
        </Col>
        <Col>
          <Button className='w-100' variant="danger" onClick={() => dispatchVotes({ type: SET_AGAINST, payload: quorum })}>100% <strong>"ПРОТИВ"</strong></Button>
        </Col>
      </Row>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            {
              entranceMaps.map(entrance => <th key={entrance}>{entrance}</th>)
            }
          </tr>
          {
            Object.keys(propertiesByNumber)
              .sort((a, b) => a < b ? -1 : 1)
              .map(apNumber =>
                <tr key={apNumber}>
                  {
                    propertiesByNumber[apNumber].map((property, i) =>
                      property.name ?
                        <td className="p-1" key={property.name}>
                          <Button
                            size="sm"
                            variant={SetButtonColor(property.name)}
                            onClick={(e) => handleVote(property.name)}
                          >
                            {property.name}
                          </Button>
                        </td>
                        : <td key={i}></td>)
                  }
                </tr>
              )
          }
        </thead>
        <tbody>

        </tbody>
      </Table >
    </div>
  )
}

export default VotingTable