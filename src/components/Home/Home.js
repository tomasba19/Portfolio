import './Home.scss'
import logoTittleT from '../../assets/images/T.png'
import logoTittleB from '../../assets/images/B.png'
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm
                <img src={logoTittleT} alt="developer" />
                omás 
                <img src={logoTittleB} alt='developer' />
                arolo,
                <br />
                Full Stack Developer.
                </h1>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>

        </div>


    )
}

export default Home;