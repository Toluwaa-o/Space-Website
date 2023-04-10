import NavBar from '../components/Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Radium from 'radium'
import mainMobile from '../assets/home/background-home-mobile.jpg'
import mainTablet from '../assets/home/background-home-tablet.jpg'
import mainDesktop from '../assets/home/background-home-desktop.jpg'
import destMobile from '../assets/destination/background-destination-mobile.jpg'
import destTablet from '../assets/destination/background-destination-tablet.jpg'
import destDesktop from '../assets/destination/background-destination-desktop.jpg'
import crewMobile from '../assets/crew/background-crew-mobile.jpg'
import crewTablet from '../assets/crew/background-crew-tablet.jpg'
import crewDesktop from '../assets/crew/background-crew-desktop.jpg'
import techMobile from '../assets/technology/background-technology-mobile.jpg'
import techTablet from '../assets/technology/background-technology-tablet.jpg'
import techDesktop from '../assets/technology/background-technology-desktop.jpg'
import logo from '../assets/shared/logo.svg'


function Page() {
  const loc = useLocation()
  const [bg, setBg] = useState({
    location: loc,
    show: false,
    bgMobile: mainMobile,
    bgTablet: mainTablet,
    bgDesktop: mainDesktop
  })

  useEffect(() => {
    setBg(prevState => ({...prevState, location: loc}))

    switch (loc.pathname.split('/')[loc.pathname.split('/').length - 1]){
      case '': 
      setBg(prev => ({...prev, bgMobile: mainMobile, bgTablet: mainTablet, bgDesktop: mainDesktop}))
      break;

      case 'destination': 
      setBg(prev => ({...prev, bgMobile: destMobile, bgTablet: destTablet, bgDesktop: destDesktop}))
      break;

      case 'crew': 
      setBg(prev => ({...prev, bgMobile: crewMobile, bgTablet: crewTablet, bgDesktop: crewDesktop}))
      break;

      case 'technology': 
      setBg(prev => ({...prev, bgMobile: techMobile, bgTablet: techTablet, bgDesktop: techDesktop}))
      break;

      default:
        setBg(prev => ({...prev, bgMobile: mainMobile, bgTablet: mainTablet, bgDesktop: mainDesktop}))
      break;
    }
  }, [loc.pathname])

  const showMenu = () => {
    setBg(prevState => ({...prevState, show: !prevState.show}))
  }

  const removerSide = () => {
    setBg(prevState => ({...prevState, show: false}))
  }

  let style = {
    backgroundImage: `url(${bg.bgMobile})`,
    '@media (min-width: 376px)': {
      backgroundImage: `url(${bg.bgTablet})`
    },
    '@media (min-width: 768px)': {
      backgroundImage: `url(${bg.bgDesktop})`
    }
  }

  let x = window.matchMedia('(min-width: 376px)')

  return (
    <div className='page' style={style}>
        <header>
          <img className='logo' src={logo} alt='logo' />
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