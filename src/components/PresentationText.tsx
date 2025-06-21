type PresentationTextProps = {
    propLang:string;
}

export default function PresentationText({propLang}:PresentationTextProps) {
    if(propLang === 'fr'){
        return (
            <>
            <div className='card' id='fr'>
                        <h3>Fraîchement reconvertie et prête pour le sprint planning !</h3>
                        <div id='text-presentation' className='text-container fade-in'>
                            Persévérante et curieuse, je suis impatiente de relever de nouveaux défis dans le domaine du développement. Bilingue en anglais, je suis à l'aise dans des environnements internationaux et je sais m'adapter rapidement aux nouvelles situations. Mon objectif est de contribuer efficacement à des projets dynamiques et collaboratifs. 
                            Oh, fun fact : je suis une grande fan d'escalade ! Que ce soit sur un mur d'escalade ou en milieu professionnel, j'adore atteindre de nouveaux sommets et repousser mes limites.
                        </div>
                    </div>
            </>
        )
    } else if (propLang === 'uk'){
        return (
            <>
            <div className='card' id='uk'>
                        <h3>Fraîchement reconvertie et prête pour le sprint planning !</h3>
                        <div id='text-presentation' className='text-container fade-in'>
                            I recently changed my career path and I'm ready for sprint planning! Persistent and curious by nature, I can't wait to tackle new development challenges. Fluent in English, I'm comfortable in international environments and can adapt quickly to new situations. My goal is to contribute effectively to dynamic and collaborative projects. 
                            More about myself: I'm a huge fan of rock climbing! On a climbing wall or in a professional environment, I love reaching new heights and pushing myself.
                        </div>
                    </div>
            </>
        )
    }
}