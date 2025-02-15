import React from 'react';
import portrait from "../assets/img/portrait.jpg";
import "../assets/styles/Intro.css"

function Intro(props) {
    return (

        <div className="flex-container">
            <div>
                <h1>
                    Lorène, développeuse web et web mobile junior.<br />
                    En recherche d'alternance du 22 avril 2025 au 24 avril 2026.<br />
                    Découvrez mon <a className="liens" href="https://www.campus-centre.fr/lafabriquenumerique41/" target="_blank">programme de formation</a> à la F@brique Numérique 41.
                </h1>
            </div>

            <div>
                <img className="photo" src={portrait} alt="Une photo de moi" style={{width:300, height:447}} />
            </div>
        </div>


    );
}

export default Intro;