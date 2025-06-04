import React from 'react'
import { MdWeb } from "react-icons/md";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Fade } from 'react-awesome-reveal';
import './WorkExp.css'
const WorkExp = () => {
    return (
        <>

            <div className="container  workexp" id='workExp'>
                <Fade bottom>
                    <h2>Work Experience </h2>
                    <hr />
                </Fade>

                <VerticalTimeline lineColor='#19825f' >

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(19, 135, 129)' }}
                        date="Dec 2019 – May 2022"
                        iconStyle={{ background: 'rgb(19, 135, 129)', color: '#fff' }}
                        icon={<MdWeb />}
                    >   <h3 className="vertical-timeline-element-title">Web Developer </h3>

                        <h4 className="vertical-timeline-element-subtitle">Search4U Media Pvt Ltd. </h4>
                        {/* <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p> */}
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#fff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(19, 135, 129)' }}
                        date="May 2019 – Jul 2019"
                        iconStyle={{ background: 'rgb(19, 135, 129)', color: '#fff' }}
                        icon={<MdWeb />}
                    >   <h3 className="vertical-timeline-element-title">Web Designer Intern</h3>

                        <h4 className="vertical-timeline-element-subtitle">Search4u Media Pvt Ltd.  </h4>
                        {/* <p>
        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p> */}
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div >
        </>
    )
}

export default WorkExp
