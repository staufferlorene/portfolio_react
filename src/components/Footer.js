import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles/Footer.css"

function Footer(props) {
    return (
        <div>
            <div className="footer margin-top">
                <ul>
                    <li><Link to="/LegalNotices" target="_blank">Mentions légales</Link></li>
                    <li><Link to="/PrivacyPolicy" target="_blank">Politique de confidentialité</Link></li>
                </ul>
            </div>
            <div className="footer">
                <p>STAUFFER Lorène</p>
            </div>
        </div>
    );
}

export default Footer;