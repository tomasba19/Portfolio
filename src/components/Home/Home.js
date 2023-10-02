import { useEffect, useState } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters.js'
import Logo from './Logo/Logo.js'
import Loader from '../Loader/Loader'

//import logoTittleT from '../../assets/images/t - copia.png'
//import logoTittleB from '../../assets/images/b - copia.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const saluteArray = [
    'e',
    'l',
    'l',
    'o',
    ' ',
    'W',
    'o',
    'r',
    'l',
    'd',
    ',',
  ]
  const nameArray = [
    ' ',
    'T',
    'o',
    'm',
    'á',
    's',
    ' ',
    'B',
    'a',
    'r',
    'o',
    'l',
    'o',
    ',',
  ]
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    ' ',
    'S',
    't',
    'a',
    'c',
    'k',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 6000)

    // Limpia el temporizador cuando el componente se desmonta
    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={saluteArray}
            idx={10}
            />
          <br />
          <span className={`${letterClass} _17`}>I</span>
          <span className={`${letterClass} _18`}>'</span>
          <span className={`${letterClass} _19`}>m</span>

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={20}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={29}
          />
        </h1>
        <h2 className='home-h2'>JavaScript / HTML / CSS / Node / React / Redux / SQL</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
    <Loader></Loader>
    </>
    
  )
}

export default Home
