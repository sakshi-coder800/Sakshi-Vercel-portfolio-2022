import React from "react";
import "./Projects.css";
// import Spin from "react-reveal/Spin";
import img3 from "../../Assets/Images/pro3.png"
import img2 from "../../Assets/Images/pro2.png"
import img1 from "../../Assets/Images/pro1.png"
import img4 from "../../Assets/Images/pro4.png"
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">    
        {/* 
.projects { padding: 45px 0; margin: 65px 0; overflow: hidden; }

.projects hr { background: #13B781; width: 250px; margin: 10px auto; border-width: 2px; }

.projects h2 { font-weight: bold; color: #19825f; text-align: center; text-transform: uppercase; margin: 10px 0; }

.projects p { text-align: center; padding: 10px 0; }
        
        
        <div className="container techstack" id='techStack'>
                <Fade bottom>
                    <h2>Technologies Stack </h2>
                    <hr />
                    <p>👉  Including Programming Languages, frameworks databases, front-end and back-end tools and APIs</p>

        
        */}
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase"> RECENT PROJECTS</h2>
        <hr />
        <p className="pb-3 text-center">
         👉 Recent Project on different Technologies
        </p>
        {/* card design */}
        <div className="row" id="ads">
          {/* <Spin> */}
          <div className="col-md-4 col-sm-12">
              <div className="card rounded">
                <div className="card-image" >
                  <span className="card-notify-badge">Full stack</span>
<img src={img1} alt="" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Blog  Webiste
                    </h6>
                  </div>
                  <a
                    className="ad-btn" target="_blank"
                    href="https://github.com/sakshi-coder800/MERN-Blog-Website"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card rounded">
                <div className="card-image" >
                  <span className="card-notify-badge">Full stack</span>
<img src={img2} alt="" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Mongodb</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Node</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      link Shortener Webiste
                    </h6>
                  </div>
                  <a
                    className="ad-btn" target="_blank"
                    href="https://github.com/sakshi-coder800/File-sharing-application-using-MERN"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
           
           
            <div className="col-md-4 col-sm-12">
              <div className="card rounded">
                <div className="card-image">
                  {/* <span className="card-notify-badge">Full stack</span> */}
<img src={img3} alt="" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">Javascript</span>
                  {/* <span className="card-detail-badge">Mongodb</span> */}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                     Beauty Product Webiste
                    </h6>
                  </div>
                  <a
                    className="ad-btn" target="_blank"
                    href="https://662a7ebacaa0720f0dfaf87e--harmonious-biscotti-515599.netlify.app"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
       
           
           
           
            <div className="col-md-4 col-sm-12">
              <div className="card rounded">
                <div className="card-image">
                  {/* <span className="card-notify-badge">Full stack</span> */}
<img src={img4} alt="" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">MUI</span>
                  <span className="card-detail-badge">CSS</span>
                  {/* <span className="card-detail-badge">Mongodb</span> */}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                     Food WebsiteUI
                    </h6>
                  </div>
                  <a
                    className="ad-btn" target="_blank"
                    href="https://resturent-website-using-material-9ul9naa67.vercel.app/"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
       
           
          {/* </Spin> */}
        </div>
      </div>
    </>
  );
};

export default Projects;