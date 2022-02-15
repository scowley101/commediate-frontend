import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import BlogPostPreview from './blog-post-preview';

const BlogPostPreviewListStyles = styled.div`
        /* padding-left: var(--bodySidePadding);
        padding-right: var(--bodySidePadding);
        margin-top: 3.5rem;
        margin-bottom: var(--verticalPadding); */
        padding: var(--componentPadding);

        h2 {
                margin: 0;
        }

        .grid {
                margin-top: 4rem;
                padding: 0;
                list-style: none;
                display: grid;
                grid-template-columns: 1fr;
                grid-column-gap: 2em;
                grid-row-gap: 2em;
        }

        .browseMoreNav {
                margin-top: 2rem;
                text-align: center;

                a {
                        display: inline-block;
                        padding: 0.5rem 0;
                        color: inherit;
                        text-decoration: none;

                        :hover {
                                color: var(--cmOrange);
                        }
                }
        }
`;

function BlogPostPreviewGrid(props) {
        return (
                <BlogPostPreviewListStyles>
                        <h2 className="headline">Insight</h2>
                        <ul className="grid">
                                {props.nodes &&
                                        props.nodes.map((node) => (
                                                <li key={node.id}>
                                                        <BlogPostPreview {...node} isInList />
                                                </li>
                                        ))}
                        </ul>
                        {props.browseMoreHref && (
                                <div className="browseMoreNav">
                                        <Link to={props.browseMoreHref}>Browse more</Link>
                                </div>
                        )}
                </BlogPostPreviewListStyles>
        );
}

BlogPostPreviewGrid.defaultProps = {
        title: '',
        nodes: [],
        browseMoreHref: '',
};

export default BlogPostPreviewGrid;
