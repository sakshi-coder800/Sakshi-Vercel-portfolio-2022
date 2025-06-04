import React from 'react'
import  './Menu.css'
import { Link } from 'react-scroll'
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook ,FcVideoProjector } from "react-icons/fc";
// import Zoom from 'react-reveal/Zoom';
// import Fade from 'react-reveal/Fade';
import { Zoom, Fade } from 'react-awesome-reveal';
import Hero_img from '../../Assets/Images/profile_pic_1.jpg'
import './Menu.css';
const Menu = ({ toggle }) => {
    return (
        <>

            {toggle ?
                (
                    <>
                        <div className="nav_menu_bar">
                            <Zoom>
                                <div className="navbar-profile-pic">
                                    <img src={Hero_img} alt="" className='img-fluid' />
                                </div>
                            </Zoom>
                            <Fade left>
                                <div className="nav-items">
                                    <div className="nav-item"><div className="nav-link" title='Home'>    <Link spy={true} smooth={true} offset={-60} duration={100} to='home'><FcHome /> Home </Link></div></div>
                                    <div className="nav-item"><div className="nav-link" title='About'>    <Link spy={true} smooth={true} offset={-60} duration={100} to='about'><FcAbout /> About </Link></div>      </div>
                                    <div className="nav-item"><div className="nav-link" title='Education'>    <Link spy={true} smooth={true} offset={-60} duration={100} to='education'><FcReadingEbook /> Education </Link></div></div>
                                    <div className="nav-item"><div className="nav-link" title='Tech Stack'>    <Link spy={true} smooth={true} offset={-60} duration={100} to='techStack'><FcBiotech /> Tech Stack </Link></div></div>
                                    <div className="nav-item"><div className="nav-link" title='Projects'>    <Link spy={true} smooth={true} offset={-60} duration={100} to='project'><FcVideoProjector /> Projects </Link></div></div>
                                    <div className="nav-item"><div className="nav-link" title='Work Experience'>    <Link spy={true} smooth={true} offset={-40} duration={100} to='workExp'><FcPortraitMode /> Work Exp. </Link></div></div>
                                    <div className="nav-item"><div className="nav-link" title='Contact'>    <Link spy={true} smooth={true} offset={-10} duration={100} to='contact'><FcBusinessContact /> Contact Us </Link></div></div>
                                </div>
                            </Fade>
                        </div>
                    </>
                ) : (
                    <>
                        <Fade>
                            <div className="nav-items collapse-navbar-items">
                                <div className="nav-item"><div className="nav-link" title='Home'><Link spy={true} smooth={true} offset={-60} duration={100} to='home'><FcHome /></Link></div></div>
                                <div className="nav-item"><div className="nav-link" title='About'><Link spy={true} smooth={true} offset={-60} duration={100} to='about'><FcAbout /></Link></div></div>
                                <div className="nav-item"><div className="nav-link" title='Education'>    <Link spy={true} smooth={true} offset={-60} duration={100} to='education'><FcReadingEbook /></Link></div></div>
                                <div className="nav-item"><div className="nav-link" title='Tech Stack'><Link spy={true} smooth={true} offset={-60} duration={100} to='techStack'><FcBiotech /></Link></div></div>
                                <div className="nav-item"><div className="nav-link" title='Projects'><Link spy={true} smooth={true} offset={-60} duration={100} to='project'><FcVideoProjector />
                                </Link></div></div>
                                <div className="nav-item"><div className="nav-link" title='Work Experience'>    <Link spy={true} smooth={true} offset={-40} duration={100} to='workExp'><FcPortraitMode />    </Link></div></div>
                                <div className="nav-item"><div className="nav-link" title='Contact'>    <Link spy={true} smooth={true} offset={0} duration={100} to='contact'><FcBusinessContact /> </Link></div></div>
                            </div>
                        </Fade>
                    </>
                )
            }
        </>
    )
}

export default Menu
