import { Link } from 'react-router-dom'

export default function errorPage() {
  return (
    <div className='errorPage'>
        <h1>Oh Oh! Something went wrong :/</h1>
        <p>Please try again later</p>
        <p>Go back to the <Link to='/react_project/'>Home</Link> page</p>
    </div>
  )
}
