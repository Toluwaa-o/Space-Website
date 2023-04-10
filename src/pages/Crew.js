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

export default memo(Crew)