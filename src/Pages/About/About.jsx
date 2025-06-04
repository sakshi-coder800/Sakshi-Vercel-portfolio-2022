import React from 'react'
import hero_img from '../../Assets/Images/profile_pic.jpeg'
// import Slide from 'react-reveal/Slide';
import { Slide } from 'react-awesome-reveal'
import "./About.css";
const About = ({ toggle }) => {
    return (
        <div>
            <div className="about" id="about" >

                <div className="row">
                    {/* <Slide left> */}
                        <div className="col-md-6 col-xl-6 col-sm-12 about-img">
                            <img src={hero_img} className='img-fluid' alt="Profile Pic" />
                        </div>
                    {/* </Slide> */}
                    {/* <Slide right> */}
                        <div className="col-md-6 col-xl-6 col-sm-12 about-content">
                            <h2>About Me </h2>
                            {/* <hr/> */}
                            <p>
                                Hello! I'm Sakshi Maheshwari, a passionate and detail-oriented full-stack web developer with a knack for creating responsive and user-friendly applications. With a strong foundation in both front-end and back-end technologies, I thrive on turning ideas into interactive and dynamic digital experiences.
                            </p>
                        </div>
                    {/* </Slide> */}
                </div>
            </div >
        </div >
    )
}

export default About
