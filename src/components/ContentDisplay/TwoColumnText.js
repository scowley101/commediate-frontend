import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const TwoColumnTextStyles = styled.div`
        padding: var(--componentPadding);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;

        /* .orange-underline {
                border-bottom: 5px solid var(--cmLightOrange);
        } */

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

function TwoColumnText({ backgroundColorRadio, cta, heading, tagline }) {
        const backGround = backgroundColorRadio?.backgroundColor;

        return (
                <TwoColumnTextStyles className={backGround}>
                        <div className="left-container" data-sal="fade">
                                <PortableText blocks={heading} />

                                <CTALink {...cta} />
                        </div>
                        <div className="right-container" data-sal="fade">
                                <PortableText blocks={tagline} />
                        </div>
                </TwoColumnTextStyles>
        );
}

export default TwoColumnText;
