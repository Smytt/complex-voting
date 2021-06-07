import { useSelector } from "react-redux";
import { Button, Table, Spinner, Container, ToggleButton, ProgressBar } from "react-bootstrap";
import { useState } from "react";

const Quorum = ({ quorum }) => {

  const [checked, setChecked] = useState<any>([])
  const properties: any = useSelector<any>(state => state.properties);
  const entranceMaps = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'М']
  const propertiesByNumber: any = useSelector<any>(state => {
    const byApNumber = state.properties.all.reduce((acc, cur) => {
      const apNumber = cur.name.split('-')[1];
      if (!acc[apNumber]) {
        acc[apNumber] = [cur]
        return acc;
      }
      acc[apNumber].push(cur)
      return acc;
    }, {})
    console.log(byApNumber)

    Object.keys(byApNumber).forEach(number => {

      const firstEntrance = byApNumber[number][0].name[0];
      const lastEntrance = byApNumber[number][byApNumber[number].length - 1].name[0];
      const cellsToPrepend = entranceMaps.findIndex(oneEntrance => oneEntrance === firstEntrance);
      const cellsToAppend = entranceMaps.length - entranceMaps.findIndex(oneEntrance => oneEntrance === lastEntrance) - 1;

      byApNumber[number] = [
        ...Array.from(Array(cellsToPrepend).keys()),
        ...byApNumber[number],
        ...Array.from(Array(cellsToAppend).keys()),
      ]
    })
    return byApNumber
  })

  const collectedArea = properties.all
    .filter(property => checked.some(checkedProperty => checkedProperty === property.name))
    .reduce((acc, cur) => {
      acc += cur.area
      return acc
    }, 0)

  const totalArea = properties.all
    .reduce((acc, cur) => {
      acc += cur.area
      return acc
    }, 0)

  const percentage = Math.round(collectedArea * 100 * 100 / totalArea) / 100

  const handleCheck = (name) => {
    if (checked.includes(name)) {
      setChecked(checked.filter(property => property !== name))
    } else {
      setChecked([...checked, name])
    }
  }

  return (
    <div>
      <ProgressBar striped variant={percentage < 50 ? 'danger' : 'success'} className="my-4" now={percentage} label={`${percentage}%`} />
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
                            id="toggle-check"
                            variant={checked.includes(property.name) ? 'primary' : 'outline-secondary'}
                            onClick={(e) => handleCheck(property.name)}
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

export default Quorum;