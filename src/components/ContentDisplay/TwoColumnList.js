import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const TwoColumnListStyles = styled.div`
        padding: var(--componentPadding);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;

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
`;

function TwoColumnList({ heading, cta, listItems, tagline }) {
        return (
                <TwoColumnListStyles>
                        <div className="left-container">
                                {heading ? <PortableText blocks={heading} /> : ''}
                                {tagline ? <PortableText blocks={tagline} /> : ''}
                                {cta ? <CTALink {...cta} /> : ''}
                        </div>
                        <ul className="right-container">
                                {listItems.map((item) => (
                                        <li>
                                                <PortableText blocks={item.text} />
                                        </li>
                                ))}
                        </ul>
                </TwoColumnListStyles>
        );
}

export default TwoColumnList;
