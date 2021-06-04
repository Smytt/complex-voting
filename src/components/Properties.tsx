import { useSelector } from "react-redux"

const Properties = () => {
  const properties: any = useSelector<any>(state => state.properties)
  console.log(properties)

  if (properties.loading) return <p>loading...</p>
  return (
    <div>
      {
        properties.all.map(property => <p>{property.name} с {property.area} кв.м. идеални части</p>)
      }
    </div>
  )
}

export default Properties