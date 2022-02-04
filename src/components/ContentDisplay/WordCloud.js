import React from 'react';
import styled from 'styled-components';
import { TagCloud } from 'react-tagcloud';
import ReactWordcloud from 'react-wordcloud';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

import PortableText from '../PortableText';

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
                top: 18rem;
                left: 50vw;
        }
`;

const options = {
        colors: ['var(--cmBlue)'],
        fontFamily: 'var(--dmSans)',
};

function WordCloud({ backgroundColorRadio, heading, tagline, words }) {
        // const backGround = backgroundColorRadio?.backgroundColor;
        const data = words.map((word, i) => ({
                text: word.word,
                value: i + 1,
        }));

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
                </WordCloudStyles>
        );
}

export default WordCloud;
