import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import PortableText from '../PortableText';

const ComparisonStyles = styled.div`
        padding: var(--componentPadding);
        .intro-container {
                margin-top: 0;
                .header > * {
                        margin-top: 0;
                        margin-bottom: 1.875rem;
                }
                .tagline > * {
                        margin-top: 0;
                        margin-bottom: 2.875rem;
                }
        }
        .comparison-container {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;
        }
        .pros-container,
        .cons-container {
                width: 35vw;
                .header {
                        margin-top: 0;
                        margin-bottom: 0.75rem;
                }
                ul {
                        padding: 0;
                        margin-top: 0;
                        list-style-type: none;
                        margin-bottom: 0;
                }
                .icon-li {
                        display: flex;
                        flex-direction: row;
                        align-items: flex-start;
                        svg,
                        p {
                                display: inline-block;
                                margin-top: 0;
                                margin-right: 0;
                                margin-bottom: 0;
                        }
                        p {
                                margin-left: 1.2em;
                        }
                        svg {
                                position: relative;
                                top: 0.15rem;
                        }
                }
        }
`;

function ComparisonLists({
        backgroundColorRadio,
        heading,
        tagline,
        prosTitle,
        proIcon,
        prosList,
        consTitle,
        conIcon,
        consList,
        cta,
}) {
        const prosIcon = proIcon?.icon?.iconifyTitle;
        const consIcon = conIcon?.icon?.iconifyTitle;
        const backGround = backgroundColorRadio?.backgroundColor;

        return (
                <ComparisonStyles className={backGround}>
                        {/* <Icon icon={prosIcon} />
                        <Icon icon={consIcon} /> */}
                        <div className="intro-container">
                                <PortableText className="header" blocks={heading} />
                                <PortableText className="tagline" blocks={tagline} />
                        </div>
                        <div className="comparison-container">
                                <div className="pros-container">
                                        <PortableText className="header" blocks={prosTitle} />
                                        <PortableText className="list" blocks={prosList} />
                                </div>
                                <div className="cons-container">
                                        <PortableText className="header" blocks={consTitle} />
                                        <PortableText className="list" blocks={consList} />
                                </div>
                        </div>
                </ComparisonStyles>
        );
}

export default ComparisonLists;
