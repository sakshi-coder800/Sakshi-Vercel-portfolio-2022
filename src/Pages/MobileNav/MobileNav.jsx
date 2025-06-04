import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector } from "react-icons/fc";
// use state change the icon style 
import { useState } from 'react'
import "./MobileNav.css"
const MobileNav = () => {
    const [MobileNavOpen, setMobileNavOpen] = useState(false);
    // handle Mobile NAv icon 
    const handleNavIcon = () => {
        setMobileNavOpen(!MobileNavOpen)
    }

    // handle Menu Clicks
    const handleMenuClick = () => {
        setMobileNavOpen(false)
    }

    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {/**/}
                    {MobileNavOpen ? (<RxCross2 size={30} className='mobile-nav-icon text-white' onClick={handleNavIcon} />) : (<GiHamburgerMenu size={30} className='moile-nav-icon text-white' onClick={handleNavIcon} />)}
                    <span className="mobile-nav-title">My Portfolio App</span>
                </div>
            </div >
            {MobileNavOpen && (
                <>
                    <div id="mobile-nav-menu">
                        <div className="nav-items">
                            <div className="nav-item mt-3">
                                <div className="nav-link mt-4" title='Home'>
                                    <Link onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100} to='home'>
                                        <FcHome /> Home
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nav-link" title='About'>
                                    <Link onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100} to='about'>
                                        <FcAbout /> About
                                    </Link>
                                </div>

                            </div>
                            <div className="nav-item">
                                <div className="nav-link" title='Education'>
                                    <Link onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100} to='education'>
                                        <FcReadingEbook /> Education
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nav-link" title='Tech Stack'>
                                    <Link onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100} to='techStack'>
                                        <FcBiotech /> Tech Stack
                                    </Link>
                                </div>
                            </div>

                            <div className="nav-item">
                                <div className="nav-link" title='Projects'>
                                    <Link onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100} to='project'>
                                        <FcVideoProjector /> Projects
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nav-link" title='Work Experience'>
                                    <Link onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100} to='workExp'>
                                        <FcPortraitMode /> Work Experience
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-item">
                                <div className="nav-link" title='Contact'>
                                    <Link onClick={handleMenuClick} spy={true} smooth={true} offset={-100} duration={100} to='contact'>
                                        <FcBusinessContact /> Contact Us
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default MobileNav;

