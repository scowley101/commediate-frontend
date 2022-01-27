import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const OneColumnTextStyles = styled.div`
        padding: var(--componentPadding);
        background-color: var(--cmGrey);
        h5 {
                margin-top: 0;
                margin-bottom: 0;
        }
        p {
                margin-top: 1.5rem;
                margin-bottom: 0;
        }
`;

function OneColumnText({ cta, heading, tagline }) {
        return (
                <OneColumnTextStyles>
                        <PortableText blocks={heading} />

                        <PortableText blocks={tagline} />

                        <CTALink {...cta} />
                </OneColumnTextStyles>
        );
}

export default OneColumnText;
