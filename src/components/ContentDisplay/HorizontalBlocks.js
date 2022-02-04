import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';

const BlockStyles = styled.div`
        padding: var(--componentPadding);

        .intro-container {
                .heading > * {
                        margin-top: 0;
                        margin-bottom: 1.75rem;
                }
        }

        .centre-container {
                display: flex;
                flex-direction: row;
                justify-content: center;
        }
        .blocks-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                grid-gap: 4.188rem;
        }
`;

function HorizontalBlocks({ backgroundColorRadio, heading, blocks }) {
        const backGround = backgroundColorRadio?.backgroundColor;
        return (
                <BlockStyles className={backGround}>
                        <div className="intro-container">
                                <PortableText className="heading" blocks={heading} />
                        </div>
                        <div className="centre-container">
                                <div className="blocks-container">
                                        {blocks.map((block) => (
                                                <div className="block-container">
                                                        <PortableText className="header" blocks={block.heading} />
                                                        <PortableText className="body" blocks={block.body} />
                                                </div>
                                        ))}
                                </div>
                        </div>
                </BlockStyles>
        );
}

export default HorizontalBlocks;
