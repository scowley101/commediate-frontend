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
                        {heading ? <PortableText blocks={heading} /> : ''}
                        {tagline ? <PortableText blocks={tagline} /> : ''}
                        <ul>
                                {listItems.map((item) => (
                                        <li>
                                                <PortableText blocks={item.text} />
                                        </li>
                                ))}
                        </ul>
                        {cta ? <CTALink {...cta} /> : ''}
                </OneColumnListStyles>
        );
}

export default OneColumnList;
