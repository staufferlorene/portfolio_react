import React from 'react';
import "../assets/styles/ProfessionalCareer.css"

function ProfessionalCareer(props) {
    return (
        <div>
            <div className="flex-titre">
                <div>
                    <h2>Parcours</h2>
                </div>
            </div>

            <div id="parcours" className="container-parc pad-top">
                <div className="txt-end">
                    <p><span className="italic">2017 - 2024<br/></span>
                        <span className="gras">Testeuse fonctionnelle<br/></span>
                        Adaptabilité<br/>
                        Curiosité<br/>
                        Esprit d’équipe
                    </p>
                </div>

                <div className="trait">
                </div>

                <div className="vide">
                </div>

                <div className="vide-d">
                </div>
            </div>

            <div className="container-parc">
                <div className="vide-g">
                </div>

                <div className="branche">
                </div>

                <div className="trait2">
                </div>

                <div className="txt-end2">
                    <p><span className="italic">2016 - 2017<br/></span>
                        <span className="gras">Coordinatrice<br/></span>
                        Gestion stress<br/>
                        Gestion équipe<br/>
                        Gestion du temps
                    </p>
                </div>

                <div className="vide-g">
                </div>
            </div>

            <div className="container-parc">
                <div className="txt-end">
                    <p><span className="italic">2012 - 2016<br/></span>
                        <span className="gras">Employée de service gestion<br/></span>
                        Écoute<br/>
                        Rigueur<br/>
                        Entraide
                    </p>
                </div>

                <div className="trait">
                </div>

                <div className="vide">
                </div>

                <div className="vide-d">
                </div>
            </div>
        </div>
    );
}

export default ProfessionalCareer;