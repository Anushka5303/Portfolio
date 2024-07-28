import React from "react";
// import profileImg from '../../assets/profile-img.png';
import profileimg1 from '../../assets/profileimg1.png'
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import './home.css';
import CV from "../../assets/resume1.pdf";



const Home = () => {

    return(
        <section className='home' id='home' >
            <div className="home__wrapper">
            <div className="home__container container">
                <p className="home__subtitle text-cs"> Hello, <span>My Name Is</span></p>
                <h1 className="home__title text-cs"><span>ÂNUSHKA</span> GUPTA</h1>
                <p className="home__job">
                <span className="textc-cs">I Am <b>Fullstack Developer</b></span>
                        
                </p>
                <div className="home__img-wrapper">
                    <div className="home__banner">
                        <img src={profileimg1} alt="" className="home__profile"/>
                    </div>
                    <p className="home__data home__data-one">
                        <span className="text-lg">Pre</span>
                        <span className="text-sm text-cs">Final Year <span>Student</span></span>
                    </p>
                    <p className="home__data home__data-two">
                        {/* <span className="text-lg">Hackathon</span> */}
                        <span className="text-sm text-cs"><b>Hackathon</b><span> Winner</span></span>
                    </p>
                    <img src={shapeOne} alt="" className="shape shape__1" />
                    <img src={shapeTwo} alt="" className="shape shape__2" />
                    <img src={shapeTwo} alt="" className="shape shape__3" />
                </div>
                <p className="home__text">I'm a software developer and here is my portfolio website. Here you'll learn about my journey as a software developer.I have rich experience in Frontend Development, also i am good UI Designer. </p>

                <div className="home__socials">
                    <a href="https://github.com/Anushka5303" className="home__social-link">
                        <FaGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/anushka-gupta-76bb65226/" className="home__social-link">
                        <FaLinkedinIn/>
                    </a>
                    <a href="" className="home__social-link">
                        <SiLeetcode/>
                    </a>
                </div>
                <div className="home__btns">
                    <a download='' href={CV} className="btn text-cs"> DownLoad CV</a>
                    <a href="#skills" className="hero__link text-cs">My Skills</a>
                </div>

            </div>
            </div>

            <div className="section__deco deco__left">
              <img src={shapeOne}  className="shape"/>
            </div>
        </section>
    )
}


export default Home;

