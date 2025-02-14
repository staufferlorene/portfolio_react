import React from 'react';
import { Link } from 'react-router-dom';
import PrivacyPolicy from "../pages/PrivacyPolicy";
import LegalNotices from "../pages/LegalNotices";
import "../assets/styles/Footer.css"

function Footer(props) {
    return (
        <div>
            <div className="footer margin-top">
                <ul>
                    <li><Link to="/LegalNotices">Mentions légales</Link></li>
                    <li><Link to="/PrivacyPolicy">Politique de confidentialité</Link></li>
                </ul>
            </div>
            <div className="footer">
                <p>STAUFFER Lorène</p>
            </div>
        </div>
    );
}

export default Footer;