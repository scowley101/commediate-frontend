import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import PortableText from '../PortableText';

const FlowStyles = styled.div`
        padding: var(--componentPadding);
        .intro-container {
                .header > * {
                        margin-top: 0;
                        margin-bottom: 1.5rem;
                }
        }
        .comparison-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
        }
        .grid {
                width: 60vw;
                display: grid;
                grid-template-columns: 3fr 1fr 3fr;
                grid-template-rows: repeat(auto-fill);
                .con-header {
                        grid-column-start: 3;
                        grid-column-end: 4;
                }
                .pro-header > *,
                .con-header > * {
                        margin-top: 0;
                        margin-bottom: 0.875rem;
                }
                .icon {
                        justify-self: center;
                        align-self: center;
                        color: var(--cmOrange);
                        margin-bottom: 0.875rem;
                }
                p {
                        align-self: center;
                        margin-top: 0;
                        margin-bottom: 0.875rem;
                }
        }
`;

function FlowList({ backgroundColorRadio, heading, tagline, prosTitle, consTitle, prosConsList, cta }) {
        const backGround = backgroundColorRadio?.backgroundColor;

        return (
                <FlowStyles className={backGround}>
                        <div className="intro-container">
                                {heading ? <PortableText className="header" blocks={heading} /> : ''}
                                {tagline ? <PortableText className="tagline" blocks={tagline} /> : ''}
                        </div>
                        <div className="comparison-container">
                                <div className="grid">
                                        <PortableText className="pro-header" blocks={prosTitle} />
                                        <PortableText className="con-header" blocks={consTitle} />
                                        {prosConsList.map((item, i) => (
                                                <>
                                                        <p>{item.proItem}</p>
                                                        <Icon className="icon" icon="akar-icons:arrow-right" />
                                                        <p>{item.conItem}</p>
                                                </>
                                        ))}
                                </div>
                        </div>
                </FlowStyles>
        );
}

export default FlowList;
