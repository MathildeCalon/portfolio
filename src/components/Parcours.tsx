import Header from './Header';
import './Parcours.css';

export default function Parcours() {
    return (
        <>
            <Header />

            <div id='parcours' className='main-content'>
                <div className='title'>
                    <h3>Mathilde, 33 ans, développeuse fullstack convertie et reconvertie ! </h3>
                </div>
                <div className='cards-container-parcours'>
                    <div className='flip-card game-card'>
                        <div className='life-step'>
                            <div className='step-dates'>
                                2010 - 2015
                            </div>
                            <div className='step-description'>
                                <span className='fa-solid fa-school title-icon'/>
                                <div><strong>Baccalauréat Littéraire Européen</strong> : Anglais</div>
                                <div><strong>Licence Langues Etrangères Appliquées aux affaires</strong> : Anglais, Espagnol, Allemand, spécialité Traduction Spécialisée Multilingue</div>
                                <div><strong>Maîtrise Métiers du Lexique et de la Traduction</strong> : Anglais</div>
                            </div>
                        </div>
                    </div>

                    <div className='flip-card game-card'>
                        <div className='life-step'>
                            <div className='step-description'>
                                <span className='fa-brands fa-expeditedssl title-icon'/>
                                <div>Assistante commerciale chez SSL247</div>
                                <div>Gestion des noms de domaine de tous les clients européens : vente, renouvellements, maintenance</div>
                            </div>

                            <div className='step-dates'>
                                2016 - 2017
                            </div>
                        </div>
                    </div>

                    <div className='flip-card game-card'>
                        <div className='life-step'>
                            <div className='step-dates'>
                                2018 - 2022
                            </div>
                            <div className='step-description'>
                                <span className='fa-solid fa-print title-icon'/>

                                <div>
                                    Assistante commerciale chez Reynders Label Printing
                                </div>

                                <div>Qualification technique des demandes clients, suivi commercial et qualité, traitement des litiges</div>
                            </div>
                        </div>
                    </div>

                    <div className='flip-card game-card'>
                        <div className='life-step'>
                            <div className='step-dates'>
                                2023
                            </div>
                            <div className='step-description'>
                                <span className='fa-solid fa-graduation-cap title-icon'/>
                                <div>
                                    Titre professionnel Développeur Web et Web Mobile
                                </div>

                                <div>Formation développeur fullstack Node.JS avec l'école O'Clock</div>
                                <div>HTML/CSS</div>
                                <div>JavaScript</div>
                                <div>PostgreSQL</div>
                                <div>Sequelize</div>                                
                                <div>Git</div>
                            </div>
                        </div>
                    </div>

                    <div className='flip-card game-card'>
                        <div className='life-step'>
                            <div className='step-dates'>
                                2024
                            </div>
                            <div className='step-description'>
                                <span className='fa-solid fa-chalkboard-user title-icon'/>
                                <div>
                                    Formation développeur fullstack Java
                                </div>

                                <div>Formation développeur fullstack Java JEE avec M2i Formation</div>
                                <div>Java</div>
                                <div>Spring Boot</div>
                                <div>Hibernate</div>
                                <div>HTML/CSS</div>
                                <div>TypeScript</div>
                                <div>PostgreSQL</div>
                                <div>Git</div>
                            </div>
                        </div>
                    </div>

                    <div className='flip-card game-card'>
                        <div className='life-step'>
                            <div className='step-dates'>
                                2024 - 2025
                            </div>
                            <div className='step-description'>
                                <span className='fa-solid fa-laptop-code title-icon'/>
                                <div>
                                    Développeuse web fullstack chez Waigéo
                                </div>

                                <div>Tiers maintenance applicative</div>
                                <div>PHP</div>
                                <div>Symfony</div>
                                <div>Doctrine</div>
                                <div>JQuery</div>
                                <div>PostgreSQL</div>
                                <div>Git</div>
                                <div>Fork</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}