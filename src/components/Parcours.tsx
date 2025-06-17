import Header from './Header';
import './Parcours.css';

export default function Parcours(){
    return(
        <>
            <Header />

            <div id='parcours' className='main-content'>
                <h3>Mathilde, 33 ans, développeuse fullstack convertie et reconvertie ! </h3>
                <div className='life-step'>
                    <div className='step-dates'>
                    2010 - 2015
                    </div>
                    <div className='step-description'>
                        <div>Baccalauréat Littéraire Européen (Anglais)</div>
                        <div>Licence Langues Etrangères Appliquées aux affaires (Anglais, Espagnol, Allemand), spécialité Traduction Spécialisée Multilingue</div>
                        <div>Maîtrise Métiers du Lexique et de la Traduction (Anglais)</div>
                    </div>
                </div>
            </div>
        </>
    )
}