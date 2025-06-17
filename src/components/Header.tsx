import './Header.css';

export default function Presentation(){

    return (
        <>
            <div id='banner'>
                <div id='avatar'>
                    <img src='avatar_portfolio.png' alt='avatar de Mathilde'></img>
                </div>
                <div id='titles'>
                    <h1>Mathilde Calon</h1>
                    <h2>Développeuse fullstack</h2>
                </div>
            </div>

            <div id='navbar'>
                <a className='navbar-link' href='/'>Présentation</a>
                <a className='navbar-link' href='/parcours'>Parcours</a>
                <a className='navbar-link'>Réalisations</a>
{/*                 <div className='navbar-link'>Contact</div> */}
            </div>
        </>
    )
}