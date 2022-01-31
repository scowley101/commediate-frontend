import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';

const RoleComparisonStyles = styled.div`
        padding: var(--componentPadding);
`;

const JobRoleStyles = styled.div`
        padding-left: var(--doubleSidePadding);
        padding-right: var(--doubleSidePadding);
        .role-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        }
        .role-detail {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
        }
        h5 {
                margin-top: 4.06rem;
                margin-bottom: 0;
        }
        h6 {
                margin-top: 1.56rem;
                margin-bottom: 0;
        }
        ul {
                margin-top: 0.44rem;
                margin-bottom: 0;
        }
        p {
                margin-top: 0;
                margin-bottom: 0;
        }
`;

function JobRole({ role: { jobTitle, text } }) {
        return (
                <JobRoleStyles>
                        <h5>
                                <span className="orange-underline-container">
                                        <span className="orange-underline-text">{jobTitle}</span>
                                </span>
                        </h5>
                        <div className="role-container">
                                {text.map((i) => (
                                        <div className="role-detail">
                                                <h6 className="text-base-bold">{i.listHeading}</h6>
                                                <PortableText blocks={i.text} />
                                        </div>
                                ))}
                        </div>
                </JobRoleStyles>
        );
}
function RoleComparison({ heading, jobRoles, tagline }) {
        return (
                <RoleComparisonStyles>
                        <PortableText blocks={heading} data-sal="fade" />
                        <PortableText blocks={tagline} data-sal="fade" />

                        {jobRoles.map((role, i) => (
                                // console.log(role.text);

                                <JobRole role={role} data-sal="fade" data-sal-delay={i * 100}>
                                        A role
                                </JobRole>
                        ))}
                </RoleComparisonStyles>
        );
}

export default RoleComparison;
