import React from 'react';
import "./Footer.css"
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p className='text-center' > Made with  <span className="text-danger">❤</span> 
            <span className='addColor'>Sakshi Maheshwari    </span>
              &copy; {currentYear} </p>
        </footer>
        //   Made With &copy; 2023
    );
};

export default Footer;
