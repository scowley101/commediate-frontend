import React from 'react';
import { Link } from 'gatsby';

import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import clientConfig from '../../../client-config';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const HeroStyles = styled.div`
        padding: var(--componentVerticalPadding) var(--sidePadding);
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: var(--cmGrey);

        .text-container {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;

                h4 {
                        margin-top: 0;
                        margin-bottom: 0;
                }
                h2 {
                        margin-top: 1.625rem;
                        margin-bottom: 0;
                }
        }

        .image-container {
                display: flex;
                justify-content: center;
        }
`;

const maybeImage = (illustration) => {
        let img = null;
        if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
                const imageData = getGatsbyImageData(illustration.image, { maxWidth: 960 }, clientConfig.sanity);

                img = <GatsbyImage className="image" image={imageData} alt={illustration.image.alt} />;
        }
        return img;
};

function Hero({ cta, heading, illustration, tagline, label }) {
        const img = maybeImage(illustration);
        return (
                <HeroStyles>
                        <div className="text-container">
                                <h4>{label}</h4>
                                <PortableText className="h2" blocks={heading} />

                                {tagline ? <PortableText blocks={tagline} /> : ''}
                                <CTALink className="hero-cta" {...cta} />
                        </div>
                        <div className="image-container">{img}</div>
                </HeroStyles>
        );
}

export default Hero;
