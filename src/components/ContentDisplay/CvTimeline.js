import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';

const JobStyles = styled.div`
        padding: 0;
        h6,
        p {
                margin: 0;
        }
        ul {
                margin-top: 1.5rem;
                margin-bottom: 0;
        }
`;

const CvTimelineStyles = styled.div`
        padding: var(--componentPadding);
`;

function Job({ job: { company, companySubtitle, jobRoleList, roleSummaryList, years } }) {
        console.log(jobRoleList);
        return (
                <JobStyles>
                        <div className="data-sal">
                                <h6>{years}</h6>
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
                        </div>
                </JobStyles>
        );
}

function CvTimeline({ cvItems }) {
        return (
                <CvTimelineStyles>
                        {cvItems.map((job) => (
                                <Job job={job} />
                        ))}
                </CvTimelineStyles>
        );
}

export default CvTimeline;
