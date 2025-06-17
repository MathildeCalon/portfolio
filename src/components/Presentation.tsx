import Header from './Header';
import './Presentation.css';

export default function Presentation(){
    return (
        <>
        < Header />

        <div id='presentation' className='main-content'>
            <h3>Fraîchement reconvertie et prête pour le sprint planning !</h3>
            <div id='language'>FR</div>
            {/* TODO: fixer la position par rapport à la div + script pour affichage UK/FR */}
            <div>
                Persévérante et curieuse, je suis impatiente de relever de nouveaux défis dans le domaine du développement. 
            </div>
            <div>
                Bilingue en anglais, je suis à l'aise dans des environnements internationaux et je sais m'adapter rapidement aux nouvelles situations. Mon objectif est de contribuer efficacement à des projets dynamiques et collaboratifs.
            </div>
            <div>
                Oh, fun fact : je suis une grande fan d'escalade ! Que ce soit sur un mur d'escalade ou en milieu professionnel, j'adore atteindre de nouveaux sommets et repousser mes limites.
            </div>

        </div>
        </>
    )
}