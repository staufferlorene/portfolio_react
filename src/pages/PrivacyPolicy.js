import React from 'react';

function PrivacyPolicy(props) {
    return (
        <div>
            <div className="flex-container">
                <h1> Politique de confidentialité</h1>
            </div>

            <div className="flex-container column">
                <p>Vous êtes en train de consulter la page des mentions légales du portfolio de</p>
                <a className="no-souligne" href="./index.html"><p>STAUFFER Lorène.</p></a><br />
                <p>
                    Aucune donnée personnelle n'est collectée.
                </p>
            </div>
        </div>
        );
        }

        export default PrivacyPolicy;