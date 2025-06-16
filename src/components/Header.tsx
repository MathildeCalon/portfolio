import './Header.css';

export default function Presentation(){

    return (
        <>
            <div id='banner'>
                <div id='avatar'>
                    <img src='avatar_portfolio.png'></img>
                </div>
                <div id='titles'>
                    <h1>Mathilde Calon</h1>
                    <h2>Développeuse fullstack</h2>
                </div>
            </div>

            <div id='navbar'>
                <div className='navbar-link'>Présentation</div>
                <div className='navbar-link'>Parcours</div>
                <div className='navbar-link'>Réalisations</div>
{/*                 <div className='navbar-link'>Contact</div> */}
            </div>
        </>
    )
}