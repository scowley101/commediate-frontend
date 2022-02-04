import React from 'react';
import styled from 'styled-components';
import { TagCloud } from 'react-tagcloud';
import PortableText from '../PortableText';

const WordCloudStyles = styled.div`
        padding: var(--componentPadding);
`;

function WordCloud({ backgroundColorRadio, heading, tagline, words }) {
        // const backGround = backgroundColorRadio?.backgroundColor;

        const data = words.map((word, i) => ({
                value: word.word,
                count: i + 1,
        }));

        const customRenderer = (tag, size, color) => (
                <span
                        key={tag.value}
                        style={{
                                animation: 'blinker 3s linear infinite',
                                animationDelay: `${Math.random() * 2}s`,
                                fontSize: `${size / 2}em`,
                                border: `2px solid ${color}`,
                                color: 'var(--cmBlue)',
                                margin: '3px',
                                padding: '3px',
                                display: 'inline-block',
                                color: 'white',
                        }}
                >
                        {tag.value}
                </span>
        );

        return (
                <WordCloudStyles>
                        <TagCloud tags={data} renderer={customRenderer} minSize={1} maxSize={5} />
                </WordCloudStyles>
        );
}

export default WordCloud;
