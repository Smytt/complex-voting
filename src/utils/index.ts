import { allProperties, entranceMaps } from "../data/ideal-areas"
import { Document, Paragraph, TextRun, Packer } from "docx";
import { saveAs } from 'file-saver'
import moment from "moment";

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

export const generateProtocol = (meeting) => {
  const allPropertiesFromQuorum = allProperties().filter(property => meeting.quorum.includes(property.name))

  const allText = meeting.topics.map(topic => {
    console.log(topic.votes, topic.votes?.supported || [])
    return [
      new Paragraph({
        children: [
          new TextRun({
            text: topic.text
          }),
        ],
      }),
      new Paragraph({
        text: `За - ${calculatePercentage(allPropertiesFromQuorum, topic.votes?.supported || [])}%`,
        bullet: {
          level: 0
        }
      }),
      new Paragraph({
        text: `Против - ${calculatePercentage(allPropertiesFromQuorum, topic.votes?.against || [])}%`,
        bullet: {
          level: 0
        }
      }),
      new Paragraph({
        text: `Въздържал се - ${calculatePercentage(allPropertiesFromQuorum, topic.votes?.refrained || [])}%`,
        bullet: {
          level: 0
        }
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `Предложението се ${calculatePercentage(allPropertiesFromQuorum, topic.votes?.supported || []) > 50 ? 'прие' : 'отхвърли'}.`,
            bold: true,
          }),
        ],
      }),      
      new Paragraph({
        children: [
          new TextRun({
            text: `\n\n`,
          }),
        ],
      })
    ]
  })
  const doc = new Document({
    sections: [{
      properties: {},
      children: allText.reduce((acc, cur) => [...acc, ...cur])
    }]
  })

  Packer.toBlob(doc).then(blob => {
    saveAs(blob, `Протокол-${moment(Date.now()).format('DD-MM-YYYY')}.docx`);
  });
}