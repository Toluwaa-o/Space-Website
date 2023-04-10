
import { useEffect, memo, useState } from 'react'
import DestDetails from './LoaderPages/DestinationDetails'


function Destination() {

  const [link, setLink] = useState({
    destination: 'moon',
    desData: []
  })

  useEffect(() => {
    fetch('./data.json')
    .then(res => res.json())
    .then(res => {
      setLink(prev => ({...prev, desData: res.destinations}))
    })
    }, [])

    const changeDestination = (name) => {
      setLink(prev => ({...prev, destination: name.toLowerCase()}))
    }

  return (
    <>
    {link.desData.length !== 0 && <div className='destination'>
      <h2><span>01</span> Pick your destination</h2>

      <nav className='destNav'>
        <ul>
          {link.desData.map(lin => {
            return <li onClick={() => changeDestination(lin.name)} className={link.destination === lin.name.toLowerCase() ? 'active' : ''} key={lin.id}>{lin.name}</li>
          })}
        </ul>
      </nav>
        
      <DestDetails data={link.desData} destination={link.destination} />
    </div>}
    </>
  )
}

export default memo(Destination)