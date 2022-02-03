import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const RoleComparisonStyles = styled.div`
        padding: var(--componentPadding);
        background-color: var(--cmGrey);
        .intro-container {
                h6 {
                        margin-top: 0;
                        margin-bottom: 2.25rem;
                }
                p,
                button {
                        margin-top: 0;
                        margin-bottom: 2rem;
                }
        }

        .roles-container {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
        }

        .role-container {
                width: 20vw;
        }
`;

const JobRoleStyles = styled.div`
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
        .role-intro-container {
                padding-bottom: 1.5rem;
                h6 {
                        padding-bottom: 1rem;
                        margin-top: 0;
                }
                .icon {
                        margin-bottom: 0.25rem;
                }
        }
        .comparison-container {
                display: flex;
                flex-direction: column;
                align-items: center;
        }

        .capabilities-container,
        .application-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 0;
                margin-bottom: 1.5rem;
                width: 100%;
                .content {
                        margin: 1rem;
                }
        }

        .capabilities-container {
                border: 4px solid var(--cmBlue);
        }
        .application-container {
                border: 4px solid var(--cmOrange);
        }
        .icon {
                margin-bottom: 1.5rem;
                padding: 0;
                height: 32px;
        }
`;

function JobRole({
        role: { jobTitle, tagline, jobIcon, applicationTitle, applicationText, capabilitiesTitle, capabilitiesText },
}) {
        const icon = jobIcon?.icon?.iconifyTitle;
        return (
                <JobRoleStyles>
                        <div className="role-intro-container ">
                                <div className="icon">
                                        <Icon icon={icon} />
                                </div>
                                <h6>
                                        <span className="orange-underline-container">
                                                <span className="orange-underline-text">{jobTitle}</span>
                                        </span>
                                </h6>
                                <p>{tagline}</p>
                        </div>
                        <div className="comparison-container">
                                <div className="capabilities-container">
                                        <div className="content">
                                                <h7 className="text-base-bold">{capabilitiesTitle}</h7>
                                                <PortableText blocks={capabilitiesText} />
                                        </div>
                                </div>
                                <div className="icon">
                                        <Icon icon="akar-icons:arrow-down" color="var(--cmOrange)" />
                                </div>
                                <div className="application-container">
                                        <div className="content">
                                                <h7 className="text-base-bold">{applicationTitle}</h7>
                                                <PortableText blocks={applicationText} />
                                        </div>
                                </div>
                        </div>
                </JobRoleStyles>
        );
}
function RoleComparison({ heading, tagline, jobRoles, cta }) {
        return (
                <RoleComparisonStyles>
                        <div className="intro-container" data-sal="fade">
                                <PortableText blocks={heading} />
                                <PortableText blocks={tagline} />
                                {cta ? <CTALink {...cta} /> : ''}
                        </div>
                        <div className="roles-container">
                                {jobRoles.map((role, i) => (
                                        <div className="role-container" data-sal="fade" data-sal-delay={i * 60}>
                                                <JobRole role={role} />
                                        </div>
                                ))}
                        </div>
                </RoleComparisonStyles>
        );
}

export default RoleComparison;
