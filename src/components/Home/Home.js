import { useEffect, useState } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters.js'
import Logo from './Logo/Logo.js'

//import logoTittleT from '../../assets/images/t - copia.png'
//import logoTittleB from '../../assets/images/b - copia.png'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
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
    }, 4000)

    // Limpia el temporizador cuando el componente se desmonta
    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _13`}>,</span>
          <br />
          <span className={`${letterClass} _14`}>I</span>
          <span className={`${letterClass} _15`}>'</span>
          <span className={`${letterClass} _16`}>m</span>

          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={17}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={20}
          />
        </h1>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
