import { useState } from 'react';
import SkillIcon from './SkillIcon';
import './Presentation.css';
import { ANGULAR, CSS3, DOCTRINE, GO, HIBERNATE, HTML, JAVA, NODEJS, PHP, POSTGRESQL, REACT, SPRING, SYMFONY, TYPESCRIPT } from '../utils/IconMap';

type Lang = 'fr' | 'uk';

const content: Record<Lang, { title: string; text: string; label: string }> = {
    fr: {
        title: "Fraîchement reconvertie et prête pour le sprint planning !",
        label: "FR",
        text: "Persévérante et curieuse, je suis impatiente de relever de nouveaux défis dans le domaine du développement. Bilingue en anglais, je suis à l'aise dans les environnements internationaux et je sais m'adapter rapidement aux nouvelles situations. Mon objectif est de contribuer efficacement à des projets dynamiques et collaboratifs. Oh, fun fact : je suis une grande fan d'escalade ! Que ce soit sur un mur d'escalade ou en milieu professionnel, j'adore atteindre de nouveaux sommets et repousser mes limites.",
    },
    uk: {
        title: "Newly retrained and ready for sprint planning!",
        label: "UK",
        text: "I recently changed my career path and I'm ready for sprint planning! Persistent and curious by nature, I can't wait to tackle new development challenges. Fluent in English, I'm comfortable in international environments and can adapt quickly to new situations. My goal is to contribute effectively to dynamic and collaborative projects. More about myself: I'm a huge fan of rock climbing! On a climbing wall or in a professional environment, I love reaching new heights and pushing myself.",
    }
};

export default function Presentation() {
    const [language, setLanguage] = useState<Lang>('fr');
    const [fade, setFade] = useState(false);

    const toggleLanguage = () => {
        const newLang = language === 'fr' ? 'uk' : 'fr';
        setFade(true);
        setTimeout(() => {
            setLanguage(newLang);
            setFade(false);
        }, 300);
    };

    return (
        <>
            <div id="presentation" className="main-content">
                <div className="card">
                    <div className={`fade-wrapper ${fade ? 'fade-out' : 'fade-in'}`}>
                        <div id='presentation-titles'>
                            <h3>{content[language].title}</h3>
                            <div id="language" onClick={toggleLanguage}>
                            {content[language].label}
                        </div>
                    </div>
                        <div id="text-presentation" className="text-container">
                            {content[language].text}
                        </div>
                    </div>
                </div>


                <div className='cards-container'>
                    <div className='card skills'>
                        <h3>Compétences</h3>

                        <div id='hard-skills'>
                            <div className='skills-type'>Frontend</div>
                            <div id='frontend' className='skills-container'>
                                <SkillIcon {...HTML} />
                                <SkillIcon {...CSS3} />
                                <SkillIcon {...TYPESCRIPT} />
                                <SkillIcon {...REACT} />
                                <SkillIcon {...ANGULAR} />
                            </div>

                            <div className='skills-type'>Backend</div>
                            <div id='backend' className='skills-container'>
                                <SkillIcon {...PHP} />
                                <SkillIcon {...JAVA} />
                                <SkillIcon {...SPRING} />
                                <SkillIcon {...NODEJS} />
                                <SkillIcon {...SYMFONY} />
                                <SkillIcon {...POSTGRESQL} />
                                <SkillIcon {...HIBERNATE} />
                                <SkillIcon {...DOCTRINE} />
                                <SkillIcon {...GO} />
                            </div>
                        </div>
                    </div>

                    <div className='card skills' id='soft-skills'>
                        <h3>Soft skills</h3>
                        <div className='soft-skills'>
                            <div><span className='fa-solid fa-battery-full' /> Autonomie</div>
                            <div><span className='fa-solid fa-gears' /> Logique</div>
                            <div><span className='fa-solid fa-glasses' /> Rigueur</div>
                            <div><span className='fa-solid fa-magnifying-glass' /> Curiosité</div>
                            <div><span className='fa-solid fa-hand-fist' /> Perséverance</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}