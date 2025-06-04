import React from 'react'
import { TechStackList } from '../../Utils/TechStackList'
import { Fade } from 'react-awesome-reveal';
import "./TechStack.css"


const TechStack = ({ toggle }) => {
    return (
        <>
            <div className="container techstack" id='techStack'>
                <Fade bottom>
                    <h2>Technologies Stack </h2>
                    <hr />
                    <p>👉  Including Programming Languages, frameworks databases, front-end and back-end tools and APIs</p>

                </Fade>
                {/* <RubberBand> */}
                <Fade bottom>
                    <div className="row tech-stack-div" style={toggle ? { paddingLeft: "50px" } : { paddingLeft: "0px" }}>
                        {TechStackList.map((tech) => (
                            <div key={tech._id} className="col-md-4 col-lg-3 col-sm-12 tech-col">
                                <div className="card m-2">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="media d-flex justify-content-center">
                                                <div className="alig-self-center">
                                                    <tech.icon className="tech-icon" />
                                                </div>
                                                <div className="media-body tech-body">
                                                    <h5>{tech.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Fade>
                {/* </RubberBand> */}
            </div>
        </>
    )
}

export default TechStack
