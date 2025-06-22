import './Header.css';
import { Link } from 'react-router-dom';

export default function Presentation(){

    return (
        <>
            <div id='banner'>
                <div id='links'>
                    <a href='https://github.com/MathildeCalon' target='_blank'><span className='fa-brands fa-github' /> Github</a>
                    <a href='https://www.linkedin.com/in/mathildecalon/' target='_blank'><span className="fa-brands fa-linkedin" /> LinkedIn</a>
                    <a href='mathilde-calon-cv' download><span className='fa-solid fa-file' /> CV</a>
                    <a href='lettre-recommandation-mathilde-calon.pdf' download><span className='fa-solid fa-star' /> Lettre de recommandation</a>
                </div>
                
                <div id='titles'>
                    <h1>Mathilde Calon</h1>
                    <h2>Développeuse fullstack</h2>
                </div>

                <div id='avatar'>
                    <img src='avatar_portfolio.png' alt='avatar de Mathilde'></img>
                </div>
            </div>

            <div id='navbar'>
                <Link className='navbar-link' to='/'>Présentation</Link>
                <Link className='navbar-link' to='/parcours'>Parcours</Link>
                <Link className='navbar-link' to='/realisations'>Réalisations</Link>
            </div>
        </>
    )
}