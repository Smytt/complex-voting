import { useSelector } from "react-redux";
import { Button, Table, Spinner, Container, ToggleButton, ProgressBar } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ButtonWithLoading from "./ButtonWithLoading";
import firebase from "firebase";
import { calculatePercentage, mapPropertiesByApNumber } from "../utils";
import { entranceMaps } from "../data/ideal-areas";

const Quorum = () => {

  const { id } = useParams();
  const quorum: any = useSelector<any>(state => state.meeting.data.quorum)
  const [attending, setAttending] = useState<any>(quorum)
  const properties: any = useSelector<any>(state => state.properties);
  const propertiesByNumber: any = useSelector<any>(state => mapPropertiesByApNumber(state.properties.all))

  const percentage = calculatePercentage(properties.all, attending)

  const handleCheck = (name) => {
    if (attending.includes(name)) {
      setAttending(attending.filter(property => property !== name))
    } else {
      setAttending([...attending, name])
    }
  }

  const handleSave = async () => {
    await firebase.firestore().collection('meetings').doc(id)
      .update({
        quorum: attending
      })
  }

  return (
    <div>
      <ProgressBar striped variant={percentage < 50 ? 'danger' : 'success'} className="my-2" now={percentage} label={`${percentage}%`} />
      <ButtonWithLoading text={"Запази"} handler={handleSave} />
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
                            id="toggle-check"
                            variant={attending.includes(property.name) ? 'primary' : 'outline-secondary'}
                            onClick={(e) => handleCheck(property.name)}
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

export default Quorum;