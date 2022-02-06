import React from 'react';
import styled from 'styled-components';
import { TagCloud } from 'react-tagcloud';
import ReactWordcloud from 'react-wordcloud';
// import 'tippy.js/dist/tippy.css';
// import 'tippy.js/animations/scale.css';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';
import PortableText from '../PortableText';
import clientConfig from '../../../client-config';

const WordCloudStyles = styled.div`
        padding: var(--componentPadding);
        display: flex;
        flex-direction: row;
        height: fit-content;
        .intro-container,
        .cloud-spacer {
                width: 50%;
        }
        .tagline > * {
                margin-top: 0;
                font-weight: 400;
                font-size: 1.25rem;
                line-height: 1.75rem;
        }
        .cloud-container {
                position: absolute;
                width: 30vw;
                height: 30vh;
                top: 15rem;
                left: 55vw;
        }
        .image-container {
                height: 1vh;
                position: relative;
                bottom: 15rem;
                .gatsby-image-wrapper {
                        height: 45vh;
                        width: 45vh;
                }
        }
`;

const options = {
        colors: ['var(--cmBlue)'],
        fontFamily: 'var(--dmSans)',
        enableTooltip: false,
        padding: 30,
        scale: 50,
};

const maybeImage = (image) => {
        let img = null;
        if (image && image.image && image.image.asset && !image.disabled) {
                const imageData = getGatsbyImageData(image.image, { maxWidth: 960 }, clientConfig.sanity);

                img = (
                        <GatsbyImage
                                className="image"
                                object-fit="scale-down"
                                height="30rem"
                                image={imageData}
                                alt={image.image.alt}
                        />
                );
        }
        return img;
};

function WordCloud({ backgroundColorRadio, heading, image, tagline, words }) {
        // const backGround = backgroundColorRadio?.backgroundColor;
        const data = words.map((word, i) => ({
                text: word.word,
                value: i + 1,
        }));

        const img = maybeImage(image);

        return (
                <WordCloudStyles>
                        <div className="intro-container">
                                <PortableText blocks={heading} />
                                <PortableText className="tagline" blocks={tagline} />
                        </div>
                        <div className="cloud-spacer">
                                <div className="cloud-container">
                                        <ReactWordcloud options={options} words={data} />
                                </div>
                        </div>
                        {/* <div className="image-container">{img}</div> */}
                </WordCloudStyles>
        );
}

export default WordCloud;
