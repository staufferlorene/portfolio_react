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
                </nav>
                <div>
                    <div className="flex-menu">
                        <div>
                            <img src="./telephone.png" alt="" width="30px" height="30px"/>
                        </div>
                        <div className="num">
                            <p className="font-size-menu">06 47 04 72 36</p>
                        </div>
                    </div>
                    <div className="flex-menu">
                        <div>
                            <img src="./email.png" alt="" width="30px" height="30px"/>
                        </div>
                        <div className="mail">
                            <p className="font-size-menu"> lorene.stau@hotmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
