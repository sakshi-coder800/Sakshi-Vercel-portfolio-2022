import React from 'react'
import Resume from "../../Assets/pdf_Files/sakshi_maheshwari.pdf";

import { Fade } from 'react-awesome-reveal';
import Typewriter from 'typewriter-effect';
// access global state 
import { useTheme } from '../../context/ThemeContext';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import "./Home.css";
const Home = ({ toggle }) => {
    const [theme, setTheme] = useTheme();

    // Handle theme
    const handleTheme = () => {
        // alert("dsds")
        setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
    }

    return (
        <>
            <div className="container home-container" id="home" style={toggle ? { paddingLeft: "0" } : { paddingLeft: "60px" }}>
                <div className="theme-btn" onClick={handleTheme}>
                    {theme === 'light' ? (<BsFillMoonStarsFill size={30} color='rgb(32 225 215)' />) : (<BsFillSunFill color='rgb(245 186 13)' size={30} />)}
                </div>
                <Fade left>
                    <h2>Hi 👋 I'm a</h2>
                    <h1>
                        <Typewriter
                            options={{
                                strings: ['FullStack Developer!', 'MERN Stack Developer!'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </Fade>
                <Fade left>
                    <div className="home-buttons">
                        <a href="https://api.whatsapp.com/send?phone=8006682019" rel='noreferrer' target='_blank' className="btn btn-hire">Contact Us</a>
                        <a href={Resume} download='Sakshi Maheshwari.pdf' className="btn btn-cv">My Resume</a>
                    </div >
                </Fade>
            </div>
        </>
    );
};

export default Home;
