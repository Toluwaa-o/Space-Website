import NavBar from '../components/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Radium from 'radium'

function Page() {
  const loc = useLocation()
  const [bg, setBg] = useState({
    location: loc,
    show: false
  })

  useEffect(() => {
    console.log(loc.pathname.split('/')[1])
    setBg(prevState => ({...prevState, location: loc}))
  }, [loc])

  const showMenu = () => {
    setBg(prevState => ({...prevState, show: !prevState.show}))
  }

  const removerSide = () => {
    setBg(prevState => ({...prevState, show: false}))
  }

  let style = {
    backgroundImage: `url('./assets/${bg.location.pathname === '/' || '' ? 'home' : bg.location.pathname.split('/')[1]}/background-${bg.location.pathname === '/' || '' ? 'home' : bg.location.pathname.split('/')[1]}-mobile.jpg')`,
    '@media (min-width: 376px)': {
      backgroundImage: `url('./assets/${bg.location.pathname === '/' || '' ? 'home' : bg.location.pathname.split('/')[1]}/background-${bg.location.pathname === '/' || '' ? 'home' : bg.location.pathname.split('/')[1]}-tablet.jpg')`
    },
    '@media (min-width: 768px)': {
      backgroundImage: `url('./assets/${bg.location.pathname === '/' || '' ? 'home' : bg.location.pathname.split('/')[1]}/background-${bg.location.pathname === '/' || '' ? 'home' : bg.location.pathname.split('/')[1]}-desktop.jpg')`
    }
  }

  let x = window.matchMedia('(min-width: 376px)')

  return (
    <div className='page' style={style}>
        <header>
          <img className='logo' src='./assets/shared/logo.svg' alt='logo' />
          {!x.matches && <img className='menu' onClick={showMenu} src='./assets/shared/icon-hamburger.svg' alt='menu' />}
            <NavBar blur={removerSide} class='sidebar' show={bg.show} func={showMenu} />
            <NavBar class='topbar' show={x.matches} />
        </header>

        <main onClick={removerSide}>
            <Outlet />
        </main>

        <footer></footer>
    </div>
  )
}

export default Radium(Page)