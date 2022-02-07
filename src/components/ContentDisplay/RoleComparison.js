import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const RoleComparisonStyles = styled.div`
        padding: var(--componentPadding);
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
        .grid-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
        }
        .roles-container {
                width: 100%;
                display: grid;
                column-gap: 5rem;
                grid-template-rows: repeat(4, minmax(50px, min-content));
                grid-template-columns: repeat(3, 1fr);
                grid-auto-flow: column;
        }
        .role-intro {
                > * {
                        margin: 0;
                }
                p {
                        margin-top: 1.125rem;
                        margin-bottom: 1.5rem;
                }
                .v0 {
                        grid-column-start: 1;
                        grid-column-end: 2;
                        grid-row-start: 1;
                        grid-row-end: 2;
                }
                .v1 {
                        grid-column-start: 2;
                        grid-column-end: 3;
                        grid-row-start: 1;
                        grid-row-end: 2;
                }
                .v2 {
                        grid-column-start: 3;
                        grid-column-end: 4;
                        grid-row-start: 1;
                        grid-row-end: 2;
                }
        }

        .capabilities-container,
        .application-container {
                p {
                        margin-top: 0;
                        margin-bottom: 0.25rem;
                }
        }

        .capabilities-container {
                border: solid 2px var(--cmBlue);
                padding: 1rem;

                .v0 {
                        grid-column-start: 1;
                        grid-column-end: 2;
                        grid-row-start: 2;
                        grid-row-end: 3;
                }
                .v1 {
                        grid-column-start: 2;
                        grid-column-end: 3;
                        grid-row-start: 2;
                        grid-row-end: 3;
                }
                .v2 {
                        grid-column-start: 3;
                        grid-column-end: 4;
                        grid-row-start: 2;
                        grid-row-end: 3;
                }
        }
        .icon-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                > * {
                        margin-top: 1rem;
                        margin-bottom: 1rem;
                }
                .v0 {
                        grid-column-start: 1;
                        grid-column-end: 2;
                        grid-row-start: 3;
                        grid-row-end: 4;
                }
                .v1 {
                        grid-column-start: 2;
                        grid-column-end: 3;
                        grid-row-start: 3;
                        grid-row-end: 4;
                }
                .v2 {
                        grid-column-start: 3;
                        grid-column-end: 4;
                        grid-row-start: 3;
                        grid-row-end: 4;
                }
        }
        .application-container {
                border: solid 2px var(--cmOrange);
                padding: 1rem;

                .v0 {
                        grid-column-start: 1;
                        grid-column-end: 2;
                        grid-row-start: 4;
                        grid-row-end: 5;
                }
                .v1 {
                        grid-column-start: 2;
                        grid-column-end: 3;
                        grid-row-start: 4;
                        grid-row-end: 5;
                }
                .v2 {
                        grid-column-start: 3;
                        grid-column-end: 4;
                        grid-row-start: 4;
                        grid-row-end: 5;
                }
        }
        @media screen and (max-width: 1400px) {
                .roles-container {
                        column-gap: 2rem;
                }
        }

        @media screen and (max-width: 900px) {
                .roles-container {
                        display: flex;
                        flex-direction: column;
                }
                .application-container {
                        margin-bottom: 3rem;
                }
        }
`;

function RoleComparison({ backgroundColorRadio, heading, tagline, jobRoles, cta }) {
        const backGround = backgroundColorRadio?.backgroundColor;

        return (
                <RoleComparisonStyles className={backGround}>
                        <div className="intro-container" data-sal="fade">
                                <PortableText blocks={heading} />
                                <PortableText blocks={tagline} />
                        </div>
                        <div className="grid-container">
                                <div className="roles-container">
                                        {jobRoles.map((role, i) => (
                                                <>
                                                        <div className={`role-intro v${i}`}>
                                                                <Icon icon={role.jobIcon.icon.iconifyTitle} />
                                                                <h6 className="jobtitle-container">
                                                                        <span className="orange-underline-container">
                                                                                <span className="orange-underline-text">
                                                                                        {role.jobTitle}
                                                                                </span>
                                                                        </span>
                                                                </h6>
                                                                <p>{role.tagline}</p>
                                                        </div>
                                                        <div className={`capabilities-container v${i}`}>
                                                                <h7 className="text-base-bold">
                                                                        {role.capabilitiesTitle}
                                                                </h7>
                                                                <PortableText blocks={role.capabilitiesText} />
                                                        </div>
                                                        <div className={`icon-container v${i}`}>
                                                                <Icon
                                                                        icon="akar-icons:arrow-down"
                                                                        color="var(--cmOrange)"
                                                                />
                                                        </div>
                                                        <div className={`application-container v${i}`}>
                                                                <h7 className="text-base-bold">
                                                                        {role.applicationTitle}
                                                                </h7>
                                                                <PortableText blocks={role.applicationText} />
                                                        </div>
                                                </>
                                        ))}
                                </div>
                        </div>
                        {cta ? <CTALink {...cta} /> : ''}
                </RoleComparisonStyles>
        );
}

export default RoleComparison;
