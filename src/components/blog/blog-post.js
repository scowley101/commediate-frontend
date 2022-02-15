import { format, distanceInWords, differenceInDays } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import { buildImageObj } from '../../utils/helpers';
import { imageUrlFor } from '../../utils/image-url';
import PortableText from '../PortableText';
import Container from '../container';
import AuthorList from './author-list';

// import * as styles from "./blog-post.module.css";

const BlogPostStyles = styled.article`
        .mainImage {
                display: block;
                position: relative;
                background: var(--cmGrey);
                padding-bottom: calc(9 / 16 * 100%);
                img {
                        display: block;
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        vertical-align: top;
                        object-fit: cover;
                }
        }

        .grid {
                padding: var(--componentPadding);
                @media (min-width: 675px) {
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-column-gap: 2em;
                        grid-template-columns: 3fr 1fr;
                }
        }

        .mainContent {
                a {
                        color: var(--color-accent);

                        @media (hover: hover) {
                                :hover {
                                        color: inherit;
                                }
                        }
                }

                h2,
                & h3,
                & h4,
                & h5,
                & h6 {
                        margin: 0.75em 0 0.5em 0;
                }
                p {
                        padding-top: 0.5em;
                }

                figure {
                        margin: 0;
                        padding: 0;

                        img {
                                max-width: 100%;
                        }
                }

                ol {
                        margin-left: 1.5em;
                        list-style: decimal;
                }

                ul {
                        margin-left: 1.5em;
                        list-style: circle;
                }
        }

        .publishedAt {
                margin: 2rem 0 3rem;
                color: var(--cmDarkGrey);
        }

        .categories {
                border-top: 1px solid var(--cmGrey);
                margin: 2rem 0 3rem;

                ul {
                        list-style: none;
                        margin: 0.75rem 0;
                        padding: 0;
                }

                ul,
                li {
                        padding: 0.25rem 0;
                }
        }

        .categoriesHeadline {
                margin: 0.5rem 0 0;
        }
`;

function BlogPost(props) {
        const { _rawBody, authors, categories, title, mainImage, publishedAt } = props;
        return (
                <BlogPostStyles>
                        {mainImage && mainImage.asset && (
                                <div className="mainImage">
                                        <img
                                                src={imageUrlFor(buildImageObj(mainImage))
                                                        .width(1200)
                                                        .height(Math.floor((9 / 16) * 1200))
                                                        .fit('crop')
                                                        .auto('format')
                                                        .url()}
                                                alt={mainImage.alt}
                                        />
                                </div>
                        )}
                        <Container>
                                <div className="grid">
                                        <div className="mainContent">
                                                <h1 className="title h2">{title}</h1>
                                                {_rawBody && <PortableText blocks={_rawBody} />}
                                        </div>
                                        <aside className="metaContent">
                                                {publishedAt && (
                                                        <div className="publishedAt text-base">
                                                                {differenceInDays(new Date(publishedAt), new Date()) > 3
                                                                        ? distanceInWords(
                                                                                  new Date(publishedAt),
                                                                                  new Date()
                                                                          )
                                                                        : format(new Date(publishedAt), 'do MMMM yyyy')}
                                                        </div>
                                                )}
                                                {authors && <AuthorList items={authors} title="Authors" />}
                                                {categories && (
                                                        <div className="categories">
                                                                <h3 className="categoriesHeadline h5">Categories</h3>
                                                                <ul>
                                                                        {categories.map((category) => (
                                                                                <li key={category._id}>
                                                                                        {category.title}
                                                                                </li>
                                                                        ))}
                                                                </ul>
                                                        </div>
                                                )}
                                        </aside>
                                </div>
                        </Container>
                </BlogPostStyles>
        );
}

export default BlogPost;
