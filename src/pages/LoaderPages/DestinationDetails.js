import { memo, useState, useEffect } from 'react'

function DestinationDetails({data, destination}) {
  const [desData, setDesData] = useState(null)

  useEffect(() => {
    const newData = data.filter(des => des.name.toLowerCase() === destination)
    setDesData(newData)
  }, [destination])

  return (
    <>
    {desData && <>
      <img src={desData[0].images.png} alt={desData[0].name + " image"} />

     <div className='DestTotal'>
        <div className='destDetails'>
          <h3>{desData[0].name}</h3>
          <p>{desData[0].description}</p>
        </div>

        <div className='destBottom'>
          <div>
            <h5>Avg. distance</h5>
            <p>{desData[0].distance}</p>
          </div>

          <div>
            <h5>Est. travel time</h5>
            <p>{desData[0].travel}</p>
          </div>
        </div>
     </div>
    </>}
    </>
 )
}

export default memo(DestinationDetails)