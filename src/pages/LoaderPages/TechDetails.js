import { useState, useEffect, memo} from 'react'

function TechDetails() {
  const [tech, setTech] = useState({
    techData: null, width: window.matchMedia('(min-width: 751px)').matches, a: null, b: null
  })

  window.addEventListener('resize', () => {
    setTech(prev => ({
      ...prev, width: window.matchMedia('(min-width: 751px)').matches
    }))
  })

  let y = tech.width ? 'portrait' : 'landscape';

  useEffect(() => {
    fetch('http://localhost:3005/technology')
    .then(rus => rus.json())
    .then(res => {
      setTech(prevState => ({
        ...prevState, techData: res, a: document.querySelector('.techSlide').scrollLeft,
        b: document.querySelector('.techSlide').scrollWidth - document.querySelector('.techSlide').clientWidth
      }))
    })
  }, [])

  if(tech.techData !== null){
    document.querySelector('.techSlide').addEventListener('scroll', ()=> {
    setTech(prev => ({
      ...prev, a: document.querySelector('.techSlide').scrollLeft
    }))
  })
  console.log(tech.a/tech.b)
}

  return (
    <>
    <div className='numNav'>
          <div className={tech.a / tech.b === 0 ? 'numActive' : 'num'}>1</div>
          <div className={tech.a / tech.b === 0.5 ? 'numActive' : 'num'}>2</div>
          <div className={tech.a / tech.b === 1 ? 'numActive' : 'num'}>3</div>
    </div>
    <div className='techSlide'>
    {tech.techData !== null ? tech.techData.map(t => {
      return <div className='techDetails' key={t.id}>

              <div>
                <h3>The terminology...</h3>
                <h4>{t.name}</h4>
                <p>{t.description}</p>
              </div>

              <img src={t.images[y]} alt='tech' />
              </div>
    }) : null}
    </div>
    </>
  )
}

export default memo(TechDetails)