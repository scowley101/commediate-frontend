import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const TwoColumnTextStyles = styled.div`
        padding: var(--componentPadding);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;

        .left-container,
        .right-container {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                h4,
                p {
                        margin-top: 0;
                        margin-bottom: 0;
                }
        }
`;

function TwoColumnText({ cta, heading, tagline }) {
        return (
                <TwoColumnTextStyles>
                        <div className="left-container">
                                <PortableText blocks={heading} />

                                <CTALink {...cta} />
                        </div>
                        <div className="right-container">
                                <PortableText blocks={tagline} />
                        </div>
                </TwoColumnTextStyles>
        );
}

export default TwoColumnText;
