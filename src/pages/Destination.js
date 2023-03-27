import { useLoaderData, Outlet, NavLink, Navigate } from 'react-router-dom'
import { useEffect, memo } from 'react'


function Destination() {
  const links = useLoaderData()

  useEffect(() => {
    <Navigate to='/1' replace={true} />
  }, [])

  return (
    <div className='destination'>
      <h2><span>01</span> Pick your destination</h2>

      <nav className='destNav'>
        <ul>
          {links.map(link => {
            return <li key={link.id}><NavLink to={link.id.toString()}>{link.name}</NavLink></li>
          })}
        </ul>
      </nav>
        
      <Outlet />
    </div>
  )
}

export default memo(Destination)

export const DesLink = async () => {
  const res = await fetch('http://localhost:3005/destinations')

  if(!res.ok){
    throw Error('Could not fetch the destinations')
}

  return res.json()
}