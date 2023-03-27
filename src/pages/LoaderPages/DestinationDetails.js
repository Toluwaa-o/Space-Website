import { useLoaderData, useParams } from 'react-router-dom'
import { memo } from 'react'

function DestinationDetails() {
  // const { name } = useParams()
  let data = useLoaderData()

  return (
    <>
      <img src={data.images.png.slice(1)} alt={data.name + " image"} />

     <div className='DestTotal'>
        <div className='destDetails'>
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>

        <div className='destBottom'>
          <div>
            <h5>Avg. distance</h5>
            <p>{data.distance}</p>
          </div>

          <div>
            <h5>Est. travel time</h5>
            <p>{data.travel}</p>
          </div>
        </div>
     </div>
    </>
  )
}

export default memo(DestinationDetails)

export const DestinationDetailsLoader = async ({params}) => {
  const { name } = params
  console.log(params)


  const res = await fetch('http://localhost:3005/destinations/' + name)

  if(!res.ok){
    throw Error('Could not load destinations')
  }

  return res.json()
}