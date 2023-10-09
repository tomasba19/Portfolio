import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Loader from '../Loader/Loader'
import './Projects.scss'
import { useEffect } from 'react'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return (
    <>
      <div className="container projects-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Projects'.split('')}
            idx={15}
          />
        </h1>
      </div>
      <Loader></Loader>
    </>
  )
}

export default Projects
