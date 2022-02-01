import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const TwoColumnListStyles = styled.div`
        padding: var(--componentPadding);
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 2rem;
        background-color: var(--cmGrey);

        .left-container,
        .right-container {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-end;
                h4,
                p {
                        margin-top: 0;
                        margin-bottom: 0;
                }
        }
        ul {
                margin: 0;
                li {
                        margin-top: 3rem;
                        margin-bottom: 0;
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

function TwoColumnList({ heading, cta, listItems, tagline }) {
        return (
                <TwoColumnListStyles>
                        <div className="left-container" data-sal="fade">
                                {heading ? <PortableText blocks={heading} /> : ''}
                                {tagline ? <PortableText blocks={tagline} /> : ''}
                                {cta ? <CTALink {...cta} /> : ''}
                        </div>
                        <ul className="right-container">
                                {listItems.map((item, i) => {
                                        const icon = item?.listIcon?.icon?.iconifyTitle;

                                        return (
                                                <li
                                                        className={icon ? 'iconful-li' : 'iconless-li'}
                                                        data-sal="fade"
                                                        data-sal-delay={i * 60}
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
