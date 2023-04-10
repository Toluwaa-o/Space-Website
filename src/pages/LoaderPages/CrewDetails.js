import { useEffect, useState } from 'react'
import { memo } from 'react'

function CrewDetails() {
  const [crew, setCrew] = useState({
    cData: null,
    a: null,
    b: null
  })

  useEffect(() => {
    fetch('./data.json')
    .then(rus => rus.json())
    .then(res => {
      setCrew({
        cData: res.crew,
        a: document.querySelector('.crewSlide').scrollLeft,
        b: document.querySelector('.crewSlide').scrollWidth - document.querySelector('.crewSlide').clientWidth
      })
    })
  }, [])

   if(crew.cData !== null){
    document.querySelector('.crewSlide').addEventListener('scroll', ()=> {
    setCrew(prev => ({
      ...prev, a: document.querySelector('.crewSlide').scrollLeft
    }))
  })
}

  return (
    <>
    <div className='Circles'>
      <div className={ crew.a / crew.b === 0 ? 'ac-circle' : 'circle' }></div>

      <div className={crew.a / crew.b > 0.3 && crew.a / crew.b < 0.4 ? 'ac-circle' : 'circle'}></div>
      <div className={crew.a / crew.b > 0.6 && crew.a / crew.b < 0.7 ? 'ac-circle' : 'circle'}></div>
      <div className={crew.a / crew.b === 1 ? 'ac-circle' : 'circle'}></div>
    </div>

    <div className='crewSlide'>
    {crew.cData !== null ? crew.cData.map(cre => {
    return (
      <div className='crewDetails' key={cre.id}>
      <div className='crewRest'>
        <h3>{cre.role}</h3>
        <h4>{cre.name}</h4>
        <p>{cre.bio}</p>
      </div>

      <div className='img'><img src={cre.images.png} alt={cre.name + ' image'} /></div>
    </div>
    )
  }) : null}
    </div>
    </>
  )
}

export default memo(CrewDetails)