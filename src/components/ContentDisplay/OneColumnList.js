import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const OneColumnListStyles = styled.div`
        padding: var(--verticalPadding) var(--doubleSidePadding);
        /* display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start; */
        ul {
                display: flex;

                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                list-style-type: none;
                margin: 0;
                padding-left: 0;
        }
        li {
                margin-top: 0;
                margin-bottom: 3rem;
                display: flex;
                flex-direction: row;
                align-items: center;
        }
        button {
                margin-top: 0.5rem;
        }
        p {
                padding: 0;
        }

        .iconful-li {
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

function OneColumnList({ backgroundColorRadio, heading, cta, listItems, tagline }) {
        const backGround = backgroundColorRadio?.backgroundColor;

        return (
                <OneColumnListStyles className={backGround}>
                        {heading ? <PortableText blocks={heading} /> : ''}
                        {tagline ? <PortableText blocks={tagline} /> : ''}
                        <ul>
                                {listItems.map((item, i) => {
                                        const icon = item?.listIcon?.icon?.iconifyTitle;
                                        return (
                                                <li className={icon ? 'iconful-li' : 'iconless-li'}>
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
                                                        <PortableText className="block" blocks={item.text} />
                                                </li>
                                        );
                                })}
                        </ul>
                        {cta ? (
                                <div className="cta-container">
                                        <CTALink {...cta} />
                                </div>
                        ) : (
                                ''
                        )}
                </OneColumnListStyles>
        );
}

export default OneColumnList;
