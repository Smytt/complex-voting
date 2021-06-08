import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { mapPropertiesByApNumber } from "../utils";
import { Button, Table, Spinner, Container, ToggleButton, ProgressBar } from "react-bootstrap";
import ButtonWithLoading from "./ButtonWithLoading";
import { entranceMaps } from "../data/ideal-areas";


const VotingTable = ({ }) => {
  const { id } = useParams();
  const [quorum, setQuorum] = useState<any>([])

  const propertiesByNumber: any = useSelector<any>(state =>
    mapPropertiesByApNumber(state.properties.all
      .filter(property => quorum.some(propertyName => propertyName === property.name))
    )
  )
  
  useEffect(() => {
    firebase.firestore().collection('meetings').doc(id)
      .onSnapshot(doc => {
        setQuorum(doc.data()?.quorum)
      })
  }, [])

  return (
    <div>
      {/* <ProgressBar striped variant={percentage < 50 ? 'danger' : 'success'} className="my-2" now={percentage} label={`${percentage}%`} /> */}
      {/* <ButtonWithLoading text={"Запази"} handler={handleSave} /> */}
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            {
              entranceMaps.map(entrance => <th>{entrance}</th>)
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
                        <td className="p-0">
                          <Button
                            size="sm"
                            variant='primary'
                            // onClick={(e) => handleCheck(property.name)}
                          >
                            {property.name}
                          </Button>
                        </td>
                        : <td></td>)
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