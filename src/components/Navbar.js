import React from 'react';
import "../assets/styles/Navbar.css"

function Navbar(props) {
    return (
        <header id="main-header">
            <div className="flex-menu s-b">
                <nav id="main-nav">
                    <ul className="flex-menu s-b">
                        <li><a href="#a-propos">A propos</a></li>
                        <li><a href="#competences">Compétences</a></li>
                        <li><a href="#projets">Projets</a></li>
                        <li><a href="#parcours">Parcours</a></li>
                    </ul>
                    <div className="contact-info">
                        <div className="flex-menu">

                                <img src="telephone.png" alt="un icône de téléphone" style={{width:30, height:30}}/>


                                <p className="num font-size-menu">06 47 04 72 36</p>

                        </div>
                        <div className="flex-menu">

                                <img src="email.png" alt="un icône d'email" style={{width:30, height:30}}  />


                                <p className="mail font-size-menu"> lorene.stau@hotmail.com</p>

                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;