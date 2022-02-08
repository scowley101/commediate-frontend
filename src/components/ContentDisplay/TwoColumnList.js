import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const TwoColumnListStyles = styled.div`
        padding: var(--componentPadding);
        display: flex;
        flex-direction: row;
        justify-content: center;

        .grey {
                background-color: var(--cmGrey);
        }
        .white {
                background-color: var(--cmWhite);
        }

        .left-container,
        .right-container {
                width: 50%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-end;
                .heading,
                .tagline {
                        margin-top: 0;
                        margin-bottom: 0;
                        p {
                                margin: 0;
                        }
                }
        }
        .left-container {
                margin-right: 1rem;
        }
        .right-container {
                margin-left: 1rem;
        }
        ul {
                margin: 0;
                padding-left: 0;
                li:nth-child(1) {
                        margin: 0;
                }
                li {
                        margin-top: 1.25rem;
                }
                p {
                        margin: 0;
                }
        }

        .iconful-li {
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
        }
`;

function TwoColumnList({ backgroundColorRadio, heading, cta, listItems, tagline }) {
        const backGround = backgroundColorRadio?.backgroundColor;

        return (
                <TwoColumnListStyles className={backGround}>
                        <div className="left-container">
                                {heading ? <PortableText className="heading" blocks={heading} /> : ''}
                                {tagline ? <PortableText className="tagline text-2xl" blocks={tagline} /> : ''}
                                {cta ? <CTALink {...cta} /> : ''}
                        </div>
                        <ul className="right-container">
                                {listItems.map((item, i) => {
                                        const icon = item?.listIcon?.icon?.iconifyTitle;

                                        return (
                                                <li
                                                        className={icon ? 'iconful-li' : 'iconless-li'}
                                                        data-sal="fade"
                                                        data-sal-delay={i * 100}
                                                >
                                                        {icon ? (
                                                                <Icon
                                                                        icon={icon}
                                                                        // vAlign="middle"
                                                                        width="2em"
                                                                        className="icon"
                                                                />
                                                        ) : (
                                                                ''
                                                        )}
                                                        <PortableText blocks={item.text} />
                                                </li>
                                        );
                                })}
                        </ul>
                </TwoColumnListStyles>
        );
}

export default TwoColumnList;
