import { format, parseISO } from 'date-fns';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { buildImageObj, cn, getBlogUrl } from '../../utils/helpers';
import { imageUrlFor } from '../../lib/image-url';
import PortableText from '../PortableText';

// import * as styles from './blog-post-preview.module.css';
// import { responsiveTitle3 } from './typography.module.css';

const BlogPostPreviewStyles = styled.div`
        display: blog;
        text-decoration: none;

        .list {
                @media (min-width: 675px) {
                        display: grid;
                        grid-template-columns: 1fr 2fr;
                        grid-gap: 2em;
                }
        }

        .leadMediaThumb {
                position: relative;
                padding-bottom: 66.666%;
                background: var(--cmGrey);

                img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                }
        }

        .text-container {
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
        }

        .excerpt > * {
                margin-top: 0.5rem;
                margin-bottom: 0;
        }

        .title {
                margin: 0;
                @media (hover: hover) {
                        :hover {
                                text-decoration: underline;
                        }
                }
        }

        .date {
                margin-top: 0.5rem;
                margin-bottom: 0;
                color: var(--cmDarkGrey);
        }
`;

function BlogPostPreview(props) {
        return (
                <BlogPostPreviewStyles>
                        <Link className="list" to={getBlogUrl(props.slug.current)}>
                                <div className="leadMediaThumb">
                                        {props.mainImage && props.mainImage.asset && (
                                                <img
                                                        src={imageUrlFor(buildImageObj(props.mainImage))
                                                                .width(600)
                                                                .height(Math.floor((9 / 16) * 600))
                                                                .auto('format')
                                                                .url()}
                                                        alt={props.mainImage.alt}
                                                />
                                        )}
                                </div>
                                <div className="text-container">
                                        <h3 className="title h5">{props.title}</h3>
                                        {props._rawExcerpt && (
                                                <PortableText className="excerpt" blocks={props._rawExcerpt} />
                                        )}
                                        <div className="date text-sm">
                                                {format(parseISO(props.publishedAt), 'do MMMM yyyy')}
                                        </div>
                                </div>
                        </Link>
                </BlogPostPreviewStyles>
        );
}

export default BlogPostPreview;
