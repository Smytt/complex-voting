import { entranceMaps } from "../data/ideal-areas"

export const calculatePercentage = (all, selected) => {
  const collectedArea = all
    .filter(property => selected.some(checkedProperty => checkedProperty === property.name))
    .reduce((acc, cur) => {
      acc += cur.area
      return acc
    }, 0)

  const totalArea = all
    .reduce((acc, cur) => {
      acc += cur.area
      return acc
    }, 0)

  const percentage = Math.round(collectedArea * 100 * 100 / totalArea) / 100

  return percentage
}

export const mapPropertiesByApNumber = (properties) => {
  const byApNumber = properties.reduce((acc, cur) => {
    const apNumber = cur.name.split('-')[1];
    if (!acc[apNumber]) {
      acc[apNumber] = [cur]
      return acc;
    }
    acc[apNumber].push(cur)
    return acc;
  }, {})

  Object.keys(byApNumber).forEach(number => {
    const fullRow = entranceMaps.map((entrance, i) => {
      const foundAp = byApNumber[number].find(ap => ap.name.startsWith(entrance));
      return foundAp || ""
    })

    byApNumber[number] = fullRow
  })
  return byApNumber
}