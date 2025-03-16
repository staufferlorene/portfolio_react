import React from 'react';
import "../assets/styles/AboutMe.css";

function AboutMe(props) {
    return (
        <div>
        <div className="flex-titre">
            <div>
                <h2>A propos</h2>
            </div>
        </div>
    <div id="a-propos" className="flex-container">
        <div className="txt-a-propos">
            <p>
                Bonjour moi c’est Lorène, 33 ans, en cours de reconversion professionnelle en tant que développeuse web
                et web mobile junior.
            </p>
            <p className="margin-top">
                Organisée, rigoureuse, autonome et riche d’une expérience de 7 ans dans le test des développements web
                notamment, je souhaite mettre mes compétences et mon expérience à profit au sein de l’entreprise qui
                m’accueillera.
            </p>
            <p className="margin-top">
                Actuellement en formation à la F@brique Numérique 41 à Blois, je recherche un contrat de
                professionnalisation du 22/04/2025 au 24/04/2026 sur Romorantin et jusqu’à 45km aux alentours.
            </p>
            <a className="cv" href="CV.pdf" target="_blank">Mon CV</a>
        </div>
    </div>
        </div>
);
}

export default AboutMe;