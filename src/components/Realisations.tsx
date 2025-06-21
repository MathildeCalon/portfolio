import './Réalisations.css';
import SkillIcon from '../components/SkillIcon';
import {
    JAVA, HIBERNATE, SPRING, ANGULAR, POSTGRESQL, DOCKER,
    TYPESCRIPT, REACT, PHP, SYMFONY, TWIG, JQUERY, DOCTRINE,
    JAVASCRIPT,
    SCSS,
    NETLIFY,
    HUBSPOT,
    NODEJS,
    EXPRESS,
    EJS
} from '../utils/IconMap';

export default function Realisations() {
    return (
        <div id='parcours' className='main-content'>
            <div className='title'>
                <h3>Projets</h3>
            </div>

            <div className='cards-container-realisation'>

                <a href='/'>
                    <div className='project-card'>
                        <div className="project-header">
                            <div className='project-title'>Portfolio - 2025</div>
                            <div className="project-description">Projet personnel</div>
                        </div>
                        <div className='project-picture'>
                            <img src='/avatar_portfolio.png'></img>
                        </div>
                        <div className="project-techno">
                            <SkillIcon {...TYPESCRIPT} />
                            <SkillIcon {...REACT} />
                        </div>
                    </div>
                </a>

                <a href='https://portailfamille.myperischool.fr/connexion' target='_blank'>
                    <div className='project-card'>
                        <div className="project-header">
                            <div className='project-title'>MyPerischool (Waigéo) - 2024/2025</div>
                            <div className="project-description">
                                Application professionnelle de gestion des activités périscolaires
                            </div>
                            <div className='project-picture'>
                                <img src='/myperischool.png'></img>
                            </div>
                        </div>
                        <div className="project-techno">
                            <SkillIcon {...PHP} />
                            <SkillIcon {...SYMFONY} />
                            <SkillIcon {...TYPESCRIPT} />
                            <SkillIcon {...TWIG} />
                            <SkillIcon {...JQUERY} />
                            <SkillIcon {...DOCTRINE} />
                            <SkillIcon {...POSTGRESQL} />
                        </div>
                    </div>
                </a>

                <a href='https://github.com/MathildeCalon/Frigo-Miam' target='_blank'>
                    <div className='project-card'>
                        <div className="project-header">
                            <div className='project-title'>Frigo Miam - 2024</div>
                            <div className="project-description">
                                Projet de fin de formation Java
                            </div>
                            <div className='project-picture'>
                                <img src='/frigomiam.png'></img>
                            </div>
                        </div>
                        <div className="project-techno">
                            <SkillIcon {...JAVA} />
                            <SkillIcon {...SPRING} />
                            <SkillIcon {...ANGULAR} />
                            <SkillIcon {...HIBERNATE} />
                            <SkillIcon {...POSTGRESQL} />
                            <SkillIcon {...DOCKER} />
                        </div>
                    </div>
                </a>

                <a href='https://github.com/MathildeCalon/LADC-evenements' target='_blank'>
                    <div className='project-card'>
                        <div className="project-header">
                            <div className='project-title'>LADC Evenements - 2023/2024</div>
                            <div className="project-description">
                                Projet personnel : application web & web mobile de location de matériel événementiel
                            </div>
                            <div className='project-picture'>
                                <img src='/ladc.png'></img>
                            </div>
                        </div>
                        <div className="project-techno">
                            <SkillIcon {...JAVASCRIPT} />
                            <SkillIcon {...REACT} />
                            <SkillIcon {...SCSS} />
                            <SkillIcon {...NETLIFY} />
                            <SkillIcon {...HUBSPOT} />
                        </div>
                    </div>
                </a>

                <a href='http://drink-genius.fr' target='_blank'>
                    <div className='project-card'>
                        <div className="project-header">
                            <div className='project-title'>Drink Genius - 2023</div>
                            <div className="project-description">
                                Projet de fin de formation : application web & web mobile de recettes de cocktails
                            </div>
                            <div className='project-picture'>
                                <img src='/cocktail.png'></img>
                            </div>
                        </div>
                        <div className="project-techno">
                            <SkillIcon {...JAVASCRIPT} />
                            <SkillIcon {...NODEJS} />
                            <SkillIcon {...EXPRESS} />
                            <SkillIcon {...EJS} />
                            <SkillIcon {...POSTGRESQL} />
                        </div>
                    </div>
                </a>

            </div>
        </div>
    );
}
