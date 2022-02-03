import React from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement, StarIcon, WorkIcon } from 'react-vertical-timeline-component';
import PortableText from '../PortableText';
import 'react-vertical-timeline-component/style.min.css';

const JobStyles = styled.div`
        padding: 0;
        padding-bottom: 3.625rem;
        h6,
        p {
                margin: 0;
        }
        ul {
                margin-top: 1.5rem;
                margin-bottom: 0;
        }

        .timeline-marker {
                border: 3px solid var(--cmOrange);
                background-color: var(--cmWhite);
                border-radius: 50%;
                width: 32px;
                height: 32px;
                margin-right: 1.428rem;
        }
        .timeline-container {
                display: flex;
                flex-direction: row;
        }
`;

const CvTimelineStyles = styled.div`
        padding: var(--componentPadding);
        background-color: var(--cmGrey);
`;

function Job({ job: { company, companySubtitle, jobRoleList, roleSummaryList, years } }) {
        console.log(jobRoleList);
        return (
                <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '--cmBlue', color: 'black' }}
                        date={years}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#000000' }}
                        // icon={<WorkIcon />}
                >
                        <JobStyles>
                                <h6>
                                        <span className="orange-underline-container">
                                                <span className="orange-underline-text">{company}</span>
                                        </span>
                                </h6>
                                <h6>{companySubtitle}</h6>
                                {jobRoleList?.map((item) => (
                                        <PortableText blocks={item.text} />
                                ))}
                                {roleSummaryList?.map((item) => (
                                        <PortableText blocks={item.text} />
                                ))}
                        </JobStyles>
                </VerticalTimelineElement>
        );
}

function CvTimeline({ cvItems }) {
        return (
                <CvTimelineStyles>
                        <VerticalTimeline>
                                {cvItems.map((job, idx) => (
                                        <Job job={job} key={idx} />
                                ))}
                        </VerticalTimeline>
                </CvTimelineStyles>
        );
}

export default CvTimeline;
