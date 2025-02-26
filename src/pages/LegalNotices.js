import React from 'react';

function LegalNotices(props) {
    return (
        <div>
            <div className="flex-container">
                <h1> Mentions légales</h1>
            </div>

            <div className="flex-container column">
                <p>Vous êtes en train de consulter la page des mentions légales du portfolio de STAUFFER Lorène.</p><br/>
                <br/>
                <p>
                    <span className="gras">Identité : </span>STAUFFER Lorène<br/>
                    <br/>
                    <span className="gras">Coordonnées : </span>1 rue du Grand Clos , 41300 Selles-Saint-Denis,
                    lorene.stau@hotmail.com<br/>
                    <br/>
                    <span className="gras">Propriété intellectuelle : </span><br/>
                    Pour l'image : STAUFFER Lorène<br/>
                    Pour tous les icônes : Freepik<br/>
                    <br/>
                    <span className="gras">Hébergeur : </span>CCI Campus Centre, 16 Place Saint-Cyran, 36000
                    Châteauroux, Téléphone : 02 54 53 52 00
                </p>
            </div>
        </div>
    );
}

export default LegalNotices;