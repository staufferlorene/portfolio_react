import React from 'react';

function LegalNotices(props) {
    return (
        <div>
            <div className="flex-container">
                <h1> Mentions légales</h1>
            </div>

            <div className="flex-container column">
                <p>Vous êtes en train de consulter la page des mentions légales du portfolio de STAUFFER Lorène.</p>
                <p className="margin-top"><span className="gras">Identité : </span>STAUFFER Lorène</p>
                <p className="margin-top"><span className="gras">Coordonnées : </span>1 rue du Grand Clos , 41300 Selles-Saint-Denis,
                    lorene.stau@hotmail.com</p>
                <p className="margin-top"><span className="gras">Propriété intellectuelle : </span></p>
                    <p>Pour l'image : STAUFFER Lorène</p>
                    <p>Pour tous les icônes : Freepik</p>
                <p className="margin-top"><span className="gras">Hébergeur : </span>CCI Campus Centre, 16 Place Saint-Cyran, 36000
                    Châteauroux, Téléphone : 02 54 53 52 00</p>
            </div>
        </div>
    );
}

export default LegalNotices;