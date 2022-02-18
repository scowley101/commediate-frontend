import React from 'react';
import { Link } from 'gatsby';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import clientConfig from '../../../client-config';
import PortableText from '../PortableText';
import CTALink from '../CTALink';

// TODO: unfuck the padding for the topModule

const HeroStyles = styled.div`
        .background-container {
                z-index: -1;
                position: absolute;
                height: 33rem;
                width: 100vw;
                .grey-container {
                        .grey {
                                background-color: var(--cmGrey);
                        }
                        .white {
                                background-color: var(--cmWhite);
                        }

                        height: 78%;
                        z-index: 50;
                }
                .bottom-whitespace {
                        height: 22%;
                }
        }

        .imageful-container,
        .imageless-container {
                /* padding-left: var(--bodySidePadding);
                padding-right: var(--bodySidePadding); */
                z-index: 1;

                padding: var(--topComponentPadding);
        }
        /* .solo-header {
                padding-top: var(--verticalPadding);
                padding-bottom: 0;
        }
        .full-header {
                padding-top: var(--verticalPadding);
                padding-bottom: var(--verticalPadding);
        } */

        .imageful-container {
                /* padding: var(--verticalPadding) var(--bodySidePadding); */
                /* grid-template-columns: 1fr 1fr;
                grid-gap: 2rem;
                position: absolute; */
                display: flex;
                flex-direction: row;
        }
        .imageless-container {
                display: flex;
                flex-direction: row;
                .text-container {
                        width: 100%;
                }
        }

        .text-container {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                width: 45vw;
                h4 {
                        margin-top: 0;
                        margin-bottom: 1.625rem;
                }
                h2 {
                        margin-top: 0;
                        margin-bottom: 0;
                }
        }

        .image-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
                width: 45vw;
                .gatsby-image-wrapper {
                        width: 35vw;
                }
        }

        @media screen and (max-width: 1150px) {
                .image-container {
                        width: 60vw;
                        .gatsby-image-wrapper {
                                width: 40vw;
                        }
                }
        }

        @media screen and (max-width: 1110px) {
                .imageful-container {
                        background-color: var(--cmGrey);
                        .white {
                                background-color: var(--cmWhite);
                        }
                        .grey {
                                background-color: var(--cmGrey);
                        }
                }
        }

        @media screen and (max-width: 900px) {
                .imageful-container {
                        flex-direction: column;
                }
                .text-container {
                        width: 100%;
                }
                .image-container {
                        width: 90vw;
                        margin-top: 2rem;
                        .gatsby-image-wrapper {
                                width: 50vw;
                        }
                }
        }
        @media screen and (max-width: 500px) {
                .h2 > * {
                        font-size: 2.25rem;
                        line-height: 2.5rem;
                }
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

function Hero({ className, backgroundColorRadio, cta, heading, illustration, tagline, label }) {
        const soloHeader = !cta && !illustration && !tagline;
        const img = maybeImage(illustration);
        const backGround = backgroundColorRadio?.backgroundColor;
        console.log(soloHeader);
        return (
                <HeroStyles className={className}>
                        {illustration ? (
                                <div className="background-container">
                                        <div className={`grey-container ${backGround}`} />
                                        <div className="bottom-whitespace" />
                                </div>
                        ) : (
                                ''
                        )}
                        <div
                                className={
                                        !illustration
                                                ? `imageless-container ${className} ${backGround} ${
                                                          soloHeader ? 'solo-header' : 'full-header'
                                                  }`
                                                : `imageful-container ${className}`
                                }
                        >
                                <div className="text-container">
                                        <h4>{label}</h4>
                                        <PortableText className="h2" blocks={heading} />

                                        {tagline ? <PortableText blocks={tagline} /> : ''}
                                        <CTALink className="hero-cta" {...cta} />
                                </div>
                                {illustration ? <div className="image-container">{img}</div> : ''}
                        </div>
                </HeroStyles>
        );
}

export default Hero;
