import { Fade } from 'react-awesome-reveal';
import './Contact.css';
import contact_img from '../../Assets/Images/contact_us.jpg';
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="container contact" id='contact'>
            <div className="card card0 border-0">
                <div className="row">
                    {/* <Fade left> */}
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12  contact-card-div">
                            <div className="card1">
                                <div className="row border-line">
                                    <img src={contact_img} alt="" />
                                </div>
                            </div>
                        </div>
                    {/* </Fade> */}
                    {/* <Fade right> */}
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12 contact-2 contact-card-div">
                            <ul className='socialLinks'>
                                <li><a href="mailto:sam9557420@gmail.com" target='_blank' rel="noreferrer">   <FaGithub />  <span>sam9557420@gmail.com</span></a></li>
                                <li><a href="tel:+918006682019" rel="noreferrer"> <FaPhone /> <span>+91 80066 82019</span></a></li>
                                <li><a href="https://www.linkedin.com/in/sakshi-maheshwari955/" target='_blank' rel="noreferrer">    <FaLinkedin /><span> Linked in</span></a></li>
                                <li><a href="https://github.com/sakshi-coder800" target='_blank' rel="noreferrer"> <MdEmail /> <span>Github</span></a></li>
                            </ul>
                        </div>
                    {/* </Fade> */}
                </div>
            </div>
        </div>
    );
};

export default Contact;
