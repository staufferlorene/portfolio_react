import React from 'react';
import "../assets/styles/ProfessionalCareer.css"

function ProfessionalCareer(props) {
    return (
        <div>
            <div className="flex-titre">
                    <h2>Parcours</h2>
            </div>

            <div id="parcours" className="flex-container-parcours top-padding">
                <div className="flex-parcours">
                    <div>
                        <p><span className="italic">2017 - 2024<br/></span>
                             <span className="gras">Testeuse fonctionnelle<br/></span>
                             Adaptabilité - Curiosité - Esprit d’équipe
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex-container-parcours">
                <div className="flex-parcours">
                    <p><span className="italic">2016 - 2017<br/></span>
                        <span className="gras">Coordinatrice<br/></span>
                        Gestion stress - Gestion équipe - Gestion du temps
                    </p>
                </div>
            </div>

            <div className="flex-container-parcours bottom-padding">
                <div className="flex-parcours">
                    <p><span className="italic">2012 - 2016<br/></span>
                        <span className="gras">Employée de service gestion<br/></span>
                        Écoute - Rigueur - Entraide
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfessionalCareer;