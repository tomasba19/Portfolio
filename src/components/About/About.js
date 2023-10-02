import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from '../Loader/Loader.js'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Limpia el temporizador cuando el componente se desmonta
    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return (
    <div id='about'>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            {' '}
            I'm Tomás, a passionate full-stack web developer with experience in
            technologies such as JavaScript, React, Redux, SQL, and Node.js.
            Since a young age, my fascination with technology has led me to
            immerse myself in the world of web development. In 2023, I decided
            to fully commit to this passion through Henry bootcamp.
          </p>
          <p>
            I'm excited to share my knowledge with leading companies in the
            industry, with the purpose of growing professionally and
            strengthening both my technical and soft skills.
          </p>
          <h2 className="about-h2">Education and Experience</h2>
          <hr className="about-hr" />
          <h3 className="about-h3">
            Full Stack Developer - Henry Bootcamp{' '}
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              &#128640;
            </a>{' '}
            ( 2023 )
          </h3>
          <p>
            Bootcamp specialized on web developtment, where I gained the
            experience necessary to become a Full Stack Developer. During the
            bootcamp, I completed multiple tests and had the opportunity to work
            on various projects. This allowed me to acquire valuable experience
            working with others using the Scrum methodology, practicing agile
            development, and using Git and GitHub for code management.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#215732" />
            </div>
          </div>
        </div>
      </div>
      <Loader></Loader>
    </div>
  )
}

export default About
