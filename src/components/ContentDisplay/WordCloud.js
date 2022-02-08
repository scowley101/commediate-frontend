import React from 'react';
import styled from 'styled-components';
import PortableText from '../PortableText';
import clientConfig from '../../../client-config';

const WordCloudStyles = styled.div`
        padding: var(--componentPadding);
        display: flex;
        flex-direction: row;
        height: fit-content;

        .white {
                background-color: var(--cmWhite);
        }

        .grey {
                background-color: var(--cmGrey);
        }

        .heading > * {
                margin-top: 0;
        }
        .tagline > * {
                margin-top: 0;
                font-weight: 400;
                font-size: 1.25rem;
                line-height: 1.75rem;
        }
        .intro-container,
        .cloud-container {
                width: 50%;
        }

        .cloud-container {
                position: relative;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                .word {
                        position: absolute;
                        margin: 0;
                }
                .word-one {
                        top: 78%;
                        right: 52%;
                }
                .word-two {
                        top: 59%;
                        right: 72%;
                }
                .word-three {
                        top: 5%;
                        right: 50%;
                }
                .word-four {
                        top: 22%;
                        right: 70%;
                }
                .word-five {
                        top: 35%;
                        right: 20%;
                }
                .word-six {
                        top: 15%;
                        right: 22%;
                }
                .word-seven {
                        top: 60%;
                        right: 39%;
                }
                .word-eight {
                        top: 72%;
                        right: 12%;
                }
                .word-nine {
                        top: 90%;
                        right: 38%;
                }
                .word-ten {
                        top: 30%;
                        right: 55%;
                }
        }
`;
// TODO: Make word cloud words editable via Sanity
function WordCloud({ backgroundColorRadio, heading, tagline, words }) {
        const backGround = backgroundColorRadio?.backgroundColor;

        return (
                <WordCloudStyles className={backGround}>
                        <div className="intro-container">
                                <PortableText className="heading" blocks={heading} />
                                <PortableText className="tagline" blocks={tagline} />
                        </div>

                        <div className="cloud-container">
                                <p className="title h3">COMMediate</p>

                                <p className="word word-one text-lg bold">Cooperate</p>
                                <p className="word word-two text-xs bold">Comprehend</p>
                                <p className="word word-three text-xl bold">Communicate</p>
                                <p className="word word-four text-sm">Resolve</p>
                                <p className="word word-five text-sm">Deal</p>
                                <p className="word word-six text-sm bold">Commercial</p>
                                <p className="word word-seven text-sm">Mediate</p>
                                <p className="word word-eight text-2xl bold">Collaborate</p>
                                <p className="word word-nine text-xs">Deliver</p>
                                <p className="word word-ten text-xs">Clarity</p>
                        </div>
                </WordCloudStyles>
        );
}

export default WordCloud;
