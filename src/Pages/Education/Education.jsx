import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbSchool } from "react-icons/tb";
import { Fade } from 'react-awesome-reveal';
import "./Education.css"
const Education = () => {
    return (
        <>
            <div className="container education" id='education'>

                <Fade bottom>
                    <h2>Education Details </h2>
                    <hr />

                </Fade>
                <VerticalTimeline >

                    {/* 
                    <VerticalTimelineElement
                        contentArrowStyle={{ borderRight: '7px solid ' }}
                        date="2019 - 2021"
                        iconStyle={{ background: '', color: '#fff' }}
                        icon={<MdWeb />}
                    >   <h3 className="vertical-timeline-element-title">Web & Graphics Designer </h3>

                        <h4 className="vertical-timeline-element-subtitle">Search4u Media Pvt Ltd.  </h4>
                         <p> */}

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid   rgb(19, 135, 129)' }}
                        date="2022 - 2024"
                        iconStyle={{ background: 'rgb(19, 135, 129)', color: '#fff' }}
                        icon={<TbSchool />}
                    >   <h3 className="vertical-timeline-element-title">MBA</h3>

                        <h4 className="vertical-timeline-element-subtitle">AKTU Lucknow, Uttar Pradesh </h4>
                        {/* <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p> */}
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid   rgb(19, 135, 129)' }}
                        date="2016 - 2019"
                        iconStyle={{ background: 'rgb(19, 135, 129)', color: '#fff' }}
                        icon={<TbSchool />}
                    >   <h3 className="vertical-timeline-element-title">BCA</h3>

                        <h4 className="vertical-timeline-element-subtitle">Agra University, Uttar Pradesh </h4>
                        {/* <p>
                            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p> */}
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div >
        </>
    )
}

export default Education
