import React from 'react';
import ReactPlayer from 'react-player';
import InstagramEmbed from 'react-instagram-embed';
import Figure from './Figure';
import MainImage from './MainImage';
import LatexRenderer from './Latex';

const AuthorReference = ({ node }) => {
        if (node && node.author && node.author.name) {
                return <span>{node.author.name}</span>;
        }
        return <></>;
};

const serializers = {
        types: {
                h1: ({ node }) => <h1 className="h1">{node}</h1>,
                h2: ({ node }) => <h2 className="h2">{node}</h2>,
                h3: ({ node }) => <h3 className="h3">{node}</h3>,
                h4: ({ node }) => <h4 className="h4">{node}</h4>,
                h5: ({ node }) => <h5 className="h5">{node}</h5>,
                h6: ({ node }) => <h6 className="h6">{node}</h6>,
                h7: ({ node }) => <h7 className="h7">{node}</h7>,
                textBase: ({ node }) => <p className="text-base">{node}</p>,
                textLg: ({ node }) => <p className="text-lg">{node}</p>,

                textXl: ({ node }) => <p className="text-xl">{node}</p>,

                text2Xl: ({ node }) => <p className="text-2xl">{node}</p>,

                authorReference: AuthorReference,
                mainImage: ({ node }) => <MainImage mainImage={node} />,
                videoEmbed: ({ node }) => <ReactPlayer className="mt-6 mb-6" url={node.url} controls />,
                instagram: ({ node }) => {
                        if (!node.url) return null;
                        return <InstagramEmbed url={node.url} className="container mx-auto mt-6 mb-6" />;
                },
                math: ({ node, isInline = false }) => <LatexRenderer isInline={isInline} latex={node.latex} />,
        },
        marks: {
                orangeUnderline: ({ children }) => <span className="orange-underline-text">{children}</span>,
        },
};

export default serializers;
