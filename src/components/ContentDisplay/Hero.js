import React from 'react';
import { Link } from 'gatsby';

import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import clientConfig from '../../../client-config';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

const HeroStyles = styled.div`
        .background-container {
                background-color: var(--cmGrey);
                height: 475px;
                position: static;
        }

        .bottom-whitespace {
                height: 5.5rem;
        }

        .imageful-container,
        .imageless-container {
                padding: var(--verticalPadding) var(--bodySidePadding);
        }

        .imageful-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 2rem;
                position: absolute;
        }
        .imageless-container {
                background-color: var(--cmGrey);

                display: flex;
                flex-direction: row;
        }

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
                .text-image {
                }
        }

        .image-container {
                display: flex;
                justify-content: center;
        }

        .image {
                /* width: 100%;
                height: 100%; */
        }
`;

const maybeImage = (illustration) => {
        let img = null;
        if (illustration && illustration.image && illustration.image.asset && !illustration.disabled) {
                const imageData = getGatsbyImageData(illustration.image, { maxWidth: 960 }, clientConfig.sanity);

                img = (
                        <GatsbyImage
                                className="image"
                                object-fit="scale-down"
                                image={imageData}
                                alt={illustration.image.alt}
                        />
                );
        }
        return img;
};

function Hero({ cta, heading, illustration, tagline, label }) {
        const img = maybeImage(illustration);
        return (
                <HeroStyles data-sal="fade">
                        <div className={!illustration ? 'imageless-container' : 'imageful-container'}>
                                <div className="text-container">
                                        <h4>{label}</h4>
                                        <PortableText className="h2" blocks={heading} />

                                        {tagline ? <PortableText blocks={tagline} /> : ''}
                                        <CTALink className="hero-cta" {...cta} />
                                </div>
                                {illustration ? <div className="image-container">{img}</div> : ''}
                        </div>
                        {illustration ? (
                                <>
                                        <div className="background-container" />
                                        <div className="bottom-whitespace" />
                                </>
                        ) : (
                                ''
                        )}
                </HeroStyles>
        );
}

export default Hero;
