import { useState } from 'react';
import Header from './Header';
import './Presentation.css';

type Lang = 'fr' | "uk";

export default function Presentation() {
    const [language, setLanguage] = useState<Lang>("fr");
    const lang: Record<Lang, string> = {
        fr: "FR",
        uk: "UK"
    };

    const [fade, setFade] = useState(false);

    const texts: Record<Lang, string> = {
        fr: "Persévérante et curieuse, je suis impatiente de relever de nouveaux défis dans le domaine du développement. Bilingue en anglais, je suis à l'aise dans des environnements internationaux et je sais m'adapter rapidement aux nouvelles situations. Mon objectif est de contribuer efficacement à des projets dynamiques et collaboratifs. Oh, fun fact : je suis une grande fan d'escalade ! Que ce soit sur un mur d'escalade ou en milieu professionnel, j'adore atteindre de nouveaux sommets et repousser mes limites.",
        uk: "I recently changed my career path and I'm ready for sprint planning! Persistent and curious by nature, I can't wait to tackle new development challenges. Fluent in English, I'm comfortable in international environments and can adapt quickly to new situations. My goal is to contribute effectively to dynamic and collaborative projects. More about myself: I'm a huge fan of rock climbing! On a climbing wall or in a professional environment, I love reaching new heights and pushing myself."
    };

    const toggleLanguage = () => {
        setFade(true);
        setTimeout(() => {
            setLanguage((prevLanguage) => (prevLanguage === "fr" ? "uk" : "fr"));
            setFade(false);
        }, 300)
    };

    return (
        <>
            < Header />

            <div id='presentation' className='main-content'>
                <div className='card'>
                    <h3>Fraîchement reconvertie et prête pour le sprint planning !</h3>
                    <div id='language' onClick={toggleLanguage} >{lang[language]}</div>
                    <div id='text-presentation' className={`text-container ${fade ? "fade-out" : "fade-in"}`}>
                        {texts[language]}
                    </div>
                </div>

                <div className='cards-container'>
                    <div className='card'>
                        <h3>Compétences</h3>
                        
                        <div id='skills'>
                            <div className='skills-type'>Frontend</div>
                            <div id='frontend' className='skills-container'>
                                <img src='/icons/html-5.svg' alt="Logo html" className='skill-icon' />
                                <img src='/icons/css-3.svg' alt="Logo CSS" className='skill-icon' />
                                <img src='/icons/typescript-icon.svg' alt="Logo typescript" className='skill-icon' />
                                
                                <img src='/icons/react.svg' alt="Logo React" className='skill-icon' />
                                <img src='/icons/angular.svg' alt="Logo angular" className='skill-icon' />
                            </div>

                            <div className='skills-type'>Backend</div>
                            <div id='backend' className='skills-container'>
                                <img src='/icons/php.svg' alt="Logo php" className='skill-icon' />
                                <img src='/icons/java.svg' alt="Logo java" className='skill-icon' />

                                <img src='/icons/spring.svg' alt="Logo spring" className='skill-icon' />
                                <img src='/icons/node.svg' alt="Logo node" className='skill-icon' />
                                <img src='/icons/symfony.svg' alt="Logo symfony" className='skill-icon' />

                                <img src='/icons/postgresql.svg' alt="Logo postgresql" className='skill-icon' />
                                <img src='/icons/hibernate.svg' alt="Logo hibernate" className='skill-icon' />
                                <img src='/icons/doctrine.svg' alt="Logo doctrine" className='skill-icon' />
                            </div>
                        </div>
                    </div>

                    <div className='card' id='soft-skills'>
                    <h3>Soft skills</h3>
                        <div className='soft-skills'>
                            <div>Autonomie</div>
                            <div>Logique</div>
                            <div>Rigueur</div>
                            <div>Curiosité</div>
                            <div>Perséverance</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}