import React from 'react';
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer>
            <div className="copyright">Copyright 2019-2020 VeloLoco</div>
            <div className="social">
                <a href={"https://www.facebook.com/VELO-LOCO-2133231516796322/"}>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                </a>
            </div>
        </footer>
    )
};

export default Footer;