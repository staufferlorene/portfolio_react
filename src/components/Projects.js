import React from 'react';
import "../assets/styles/Projects.css"

function Projects(props) {
    return (
        <div>
            <div className="flex-titre">
                <div>
                    <h2>Projets</h2>
                </div>
            </div>

            <div id="projets" className="projects-flex-container">
                <div className="flex-projet">
                    <div>
                        <img className="bord-arrondi" src="portfolio_html_css.png" alt="" style={{width:300, height:200}}/>
                        <p className="gras txt-centre marg">Portfolio</p>
                        <p className="marg">Site sur lequel vous êtes actuellement.</p>
                        <p>Site réalisé en React JS dans le cadre de la formation.</p>
                    </div>
                </div>

                <div className="flex-projet">
                    <div>
                        <img className="bord-arrondi" src="portfolio_wp.png" alt="" style={{width:300, height:200}}/>
                        <p className="gras txt-centre marg">Portfolio</p>
                        <p className="marg">2ème Portfolio réalisé dans le cadre de la formation.</p>
                        <p>Site réalisé avec WordPress.</p>
                    </div>
                </div>

                <div className="flex-projet">
                    <div>
                        <img className="bord-arrondi" src="cite_num.png" alt="" style={{width:300, height:200}}/>
                        <p className="gras txt-centre marg">Cité du Numérique de Blois</p>
                        <p className="marg">Projet client réalisé dans le cadre de la formation.</p>
                        <p>Site réalisé avec WordPress en travail de groupe.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;