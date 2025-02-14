import React from 'react';
import "../assets/styles/AboutMe.css";
import portrait from "../assets/img/portrait.jpg";

function AboutMe(props) {
    return (
        <div>
        <div className="flex-titre">
            <div>
                <h2>A propos</h2>
            </div>
        </div>
    <div id="a-propos" className="flex-container introduction">
        <div className="padding-right">
            <img className="photo" src={portrait} alt="Une photo de moi" width="300px" height="447px"/>
        </div>

        <div className="txt-a-propos">
            <p>
                Bonjour moi c’est Lorène, 33 ans, en cours de reconversion professionnelle en tant que développeuse web
                et web mobile junior.<br /><br />
                Organisée, rigoureuse, autonome et riche d’une expérience de 7 ans dans le test des développements web
                notamment, je souhaite mettre mes compétences et mon expérience à profit au sein de l’entreprise qui
                m’accueillera.<br /><br />
                Actuellement en formation à la F@brique Numérique 41 à Blois, je recherche un contrat de
                professionnalisation du 22/04/2025 au 24/04/2026 sur Romorantin et jusqu’à 45km aux alentours.
            </p>
            <a className="cv" href="CV.pdf" target="_blank">Télécharger mon CV</a>
        </div>
    </div>
        </div>
);
}

export default AboutMe;