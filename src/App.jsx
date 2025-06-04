import './App.css';
import ScrollToTop from 'react-scroll-to-top';
import Layout from './Components/Layout/Layout';
import About from './Pages/About/About';
import Education from './Pages/Education/Education'
import TechStack from './Pages/TechStack/TechStack'
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer'
import WorkExp from './Pages/WorkExp/WorkExp'
import Projects from './Pages/Projects/Projects'
import MobileNav from './Pages/MobileNav/MobileNav'
import { useState } from 'react';
import { useTheme } from './context/ThemeContext'
// import { hover } from '@testing-library/user-event/dist/hover';
// import {hover} from '@testing-library/user-event/dist/hover'
// import '@testing-library/dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [toggle, setToggle] = useState(true);
  // change Toggle
  const handleToggle = () => {
    setToggle(!toggle);
  }
  const [theme] = useTheme()
  return (
    <>
      <div id={theme}>
        <MobileNav />

        <Layout toggle={toggle} handleToggle={handleToggle} />
        {/* <div className="container" style={toggle ? { paddingLeft: "160px" ,'@media (max-width: 600px)': { paddingLeft: "0px" }} : { paddingLeft: "60px",  '@media (max-width: 768px)': { paddingLeft: "0px" }  }}> */}
        <div className="container" style={toggle ? { paddingLeft: "160px"         } : { paddingLeft: "60px"
          }}>
          
          <About />
          <Education />
          <TechStack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <Footer />
        {/* Scroll to top functionality  */}
        <ScrollToTop  smooth 
        color='#fff' 
    // style={{
      //  backgroundColor: 'rgb(19, 135, 129)', borderRadius: "80px" ,
    // height: "50px",
    // width: "50px",
    // }}
     />

      </div>
      {/* <div id={theme}>

        <MobileNav />

       
        
        
        
      </div> */}
    </>
  );
}

export default App;
