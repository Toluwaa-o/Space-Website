import { Outlet, useLoaderData } from 'react-router-dom'
import TechDetails from './LoaderPages/TechDetails';

export default function Technology() {

  return (
    <div className='technology'>
      <h2><span>03</span> Space launch 101</h2>

      <TechDetails />
    </div>
  )
}

export const TechData = async () => {
  const res = await fetch('http://localhost:3005/technology')

  if(!res.ok){
    throw Error('Cannot load technology!')
  }

  return res.json()
}