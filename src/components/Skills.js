import React from 'react';
import "../assets/styles/Skills.css"

function Skills(props) {
    return (
        <div>
            <div className="flex-titre">
                <h2>Compétences</h2>
            </div>

            <div id="competences" className="flex-container">
                <div class="competence-section">

                    {/*Savoir-faire*/}
                    <div className="savoir-faire">
                        <div className="savoir-faire-text pad-bot">
                            <h3>Savoir-faire</h3>
                        </div>
                        <div className="savoir-faire-container">
                            <div className="savoir-faire-card">
                                <img src="html.png" alt="" width="40px" height="40px"/>
                                    <a className="no-souligne" href="https://developer.mozilla.org/fr/docs/Web/HTML"
                                       target="_blank"><p>HTML</p></a>
                            </div>

                            <div className="txt-centre">
                                <img src="css.png" alt="" width="40px" height="40px"/>
                                    <a className="no-souligne" href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank">
                                        <p>CSS</p></a>
                            </div>

                            <div className="txt-centre">
                                <img src="js.png" alt="" width="40px" height="40px"/>
                                    <a className="no-souligne" href="https://developer.mozilla.org/fr/docs/Web/JavaScript"
                                       target="_blank"><p>Javascript</p></a>
                            </div>
                            <div className="txt-centre">
                                <img src="wp.png" alt="" width="40px" height="40px"/>
                                    <a className="no-souligne" href="https://wordpress.com/fr/" target="_blank"><p>WordPress</p></a>
                            </div>

                            <div className="txt-centre">
                                <img src="php.png" alt="" width="40px" height="40px"/>
                                    <a className="no-souligne" href="https://www.php.net/" target="_blank"><p>PHP</p></a>
                            </div>
                        </div>
                    </div>

                    {/*Savoir-etre*/}
                    <div className="savoir-etre">
                        <div className="txt-centre pad-bot">
                            <h3>Savoir-être</h3>
                        </div>

                        <div className="savoir-être-container">
                            <div className="txt-centre">
                                <img src="equipe.png" alt="" width="40px" height="40px"/>
                                    <p>Esprit d'équipe</p>
                            </div>

                            <div className="txt-centre">
                                <img src="autonome.png" alt="" width="40px" height="40px"/>
                                    <p>Autonome</p>
                            </div>

                            <div className="txt-centre">
                                <img src="patience.png" alt="" width="40px" height="40px"/>
                                    <p>Patiente</p>
                            </div>

                            <div className="txt-centre">
                                <img src="rigoureuse.png" alt="" width="40px" height="40px"/>
                                    <p>Rigoureuse</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);
}

export default Skills;