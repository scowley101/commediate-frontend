import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const OneColumnListStyles = styled.div`
        padding: var(--verticalPadding) var(--doubleSidePadding);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
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
        }
        button {
                margin-top: 0.5rem;
        }
        p {
                padding: 0;
        }
`;

function OneColumnList({ heading, cta, listItems, tagline }) {
        return (
                <OneColumnListStyles>
                        {heading ? <PortableText blocks={heading} data-sal="fade" /> : ''}
                        {tagline ? <PortableText blocks={tagline} data-sal="fade" /> : ''}
                        <ul>
                                {listItems.map((item, i) => (
                                        <li>
                                                <PortableText
                                                        blocks={item.text}
                                                        data-sal="fade"
                                                        data-sal-delay={i * 100}
                                                />
                                        </li>
                                ))}
                        </ul>
                        {cta ? <CTALink {...cta} /> : ''}
                </OneColumnListStyles>
        );
}

export default OneColumnList;
