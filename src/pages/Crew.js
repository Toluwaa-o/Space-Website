import { memo } from 'react'
import CrewDetails from './LoaderPages/CrewDetails'

function Crew() {

  return (
    <div className='crew'>
      <h2><span>02</span> Meet your crew</h2>

      <CrewDetails />
    </div>
  )
}


export const CrewLoader = async () => {
  const res = await fetch('http://localhost:3005/crew')

  if(!res.ok){
    throw Error('Could not load Crew Members!')
  }

  return res.json()
}

export default memo(Crew)