import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const OneColumnTextStyles = styled.div`
        padding: var(--componentPadding);
        .heading > * {
                margin-top: 0;
                margin-bottom: 2.5rem;
        }
        .tagline > * {
                margin-top: 0;
        }
        h5 {
                margin-top: 0;
                margin-bottom: 0;
        }
`;

function OneColumnText({ backgroundColorRadio, cta, heading, tagline }) {
        const backGround = backgroundColorRadio?.backgroundColor;

        return (
                <OneColumnTextStyles className={backGround}>
                        <div data-sal="fade">
                                <PortableText className="heading" blocks={heading} />

                                <PortableText className="tagline" blocks={tagline} />

                                <CTALink {...cta} />
                        </div>
                </OneColumnTextStyles>
        );
}

export default OneColumnText;
