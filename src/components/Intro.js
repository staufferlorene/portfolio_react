import React from 'react';
import portrait from "../assets/img/portrait.jpg";
import "../assets/styles/Intro.css"

function Intro(props) {
    return (
        <div className="intro-flex-container">
            <div className="intro">
                <h1>Lorène, développeuse web et web mobile junior.</h1>
                <h1 className="intro-margin">En recherche d'alternance du 22 avril 2025 au 24 avril 2026.</h1>
                <h1>Découvrez mon <a className="liens" href="https://www.campus-centre.fr/lafabriquenumerique41/" target="_blank">programme de formation</a> à la F@brique numérique 41.</h1>
            </div>

            <div>
                <img className="photo" src={portrait} alt="Une photo de moi" />
            </div>
        </div>
    );
}

export default Intro;