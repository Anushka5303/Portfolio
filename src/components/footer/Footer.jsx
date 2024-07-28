import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import './footer.css';

const Footer= () =>{
    return (
        <footer className="footer">
            <div className="footer__container container grid">
            <div className="footer__socials">
                    <a href="https://github.com/Anushka5303" className="footer__social-link">
                    <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/anushka-gupta-76bb65226/" className="footer__social-link">
                        <FaLinkedinIn/>
                    </a>
                    <a href="" className="footer__social-link">
                        <SiLeetcode/>
                    </a>
                </div>


                <p className="footer__copyright text-cs" >© 2024 <span>Portfolio </span></p>
                <p className="footer__copyright text-cs">Developed by <span>Anushka Gupta</span></p>
            </div>
        </footer>
    )
}

export default Footer;