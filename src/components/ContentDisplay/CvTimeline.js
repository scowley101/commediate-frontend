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

function Job({ job: { company, jobRoleList, roleSummaryList, years } }) {
        console.log(jobRoleList);
        return (
                <JobStyles>
                        <div className="data-sal">
                                <PortableText blocks={years} />
                                <PortableText blocks={company} />
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
