import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const TwoColumnListStyles = styled.div`
        padding: var(--componentPadding);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        .intro-container {
                .heading > * {
                        margin-top: 0;
                        margin-bottom: 0;
                }
                .tagline > * {
                        margin-bottom: 0;
                        margin-top: 2.25rem;
                }
        }

        .list-container {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;

                margin: 0;
                list-style-type: none;
                padding: 0;
                li {
                        margin-top: 2rem;
                        margin-bottom: 0;
                        width: 25vw;
                        p {
                                margin: 0;
                        }
                }
        }
        button {
                margin-top: 2.25rem;
        }

        /* .iconful-li {
                display: flex;
                flex-direction: row;
                align-items: center;
                list-style-type: none;
                svg {
                        color: var(--cmOrange);
                }
                svg,
                p {
                        display: inline-block;
                }
                p {
                        margin-left: 2em;
                }
        }

        .iconless-li {
                p {
                        margin-left: 4em;
                }
        } */
`;

function TwoColumnList({ backgroundColorRadio, heading, cta, listItems, tagline }) {
        const backGround = backgroundColorRadio?.backgroundColor;

        return (
                <TwoColumnListStyles className={backGround}>
                        <div className="intro-container" data-sal="fade">
                                {heading ? <PortableText className="heading" blocks={heading} /> : ''}
                                {tagline ? <PortableText className="tagline" blocks={tagline} /> : ''}
                        </div>
                        <ul className="list-container">
                                {listItems.map((item, i) => (
                                        <li data-sal="fade" data-sal-delay={i * 60}>
                                                <PortableText blocks={item.text} />
                                        </li>
                                ))}
                        </ul>
                        {cta ? <CTALink {...cta} /> : ''}
                </TwoColumnListStyles>
        );
}

export default TwoColumnList;
