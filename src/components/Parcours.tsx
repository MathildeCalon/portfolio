import Header from './Header';
import './Parcours.css';
import { useState } from 'react';

export default function Parcours() {
    const [flipped, setFlipped] = useState(false);


    return (
        <>
            <Header />

            <div id='parcours' className='main-content'>
                <div className='title'>
                    <h3>Mathilde, 33 ans, développeuse fullstack convertie et reconvertie ! </h3>
                </div>
                {/* TODO : finir la mise en page et contenu des cartes */}
                <div className='cards-container-parcours'>
                    <div className='flip-card card'>
                        <div className='life-step'>
                            <div className='step-dates'>
                                2010 - 2015
                            </div>
                            <div className='step-description'>
                                <ul><strong>Baccalauréat Littéraire Européen</strong> : Anglais</ul>
                                <ul><strong>Licence Langues Etrangères Appliquées aux affaires</strong> : Anglais, Espagnol, Allemand, spécialité Traduction Spécialisée Multilingue</ul>
                                <ul><strong>Maîtrise Métiers du Lexique et de la Traduction</strong> : Anglais</ul>
                            </div>
                        </div>
                    </div>

                    <div className='flip-card card'>
                        <div className='life-step'>
                            <div className='step-description'>
                                <div>Assistante commerciale chez SSL247</div>
                                <div>Gestion des noms de domaine de tous les clients européens : vente, renouvellements, maintenance</div>
                            </div>

                            <div className='step-dates'>
                                2016 - 2017
                            </div>
                        </div>
                    </div>

                    <div className='flip-card card'>
                        <div className='life-step'>
                            <div className='step-dates'>
                                2018 - 2022
                            </div>
                            <div className='step-description'>
                                <div>
                                    Assistante commerciale chez Reynders
                                </div>

                                <div>Gestion des demandes clients, qualification technique, suivi commercial, traitement des litiges</div>
                            </div>
                        </div>
                    </div>

                    <div className='flip-card card'>
                        <div className='life-step'>
                            <div className='step-dates'>
                                2023 - 2024
                            </div>
                            <div className='step-description'>
                                <div>
                                    Titre professionnel Développeur Web et Web Mobile
                                </div>

                                <div>Qualification technique des demandes clients, suivi commercial et qualité, traitement des litiges</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}