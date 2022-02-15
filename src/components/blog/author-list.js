import React from 'react';
import styled from 'styled-components';
import { buildImageObj } from '../../utils/helpers';
import { imageUrlFor } from '../../utils/image-url';

// import * as styles from "./author-list.module.css";

const AuthorListStyles = styled.div`
        margin: 2rem 0 3rem;
        border-top: 1px solid var(--cmGrey);

        .headline {
                margin: 0.5rem 0 0;
        }
        .list {
                list-style: none;
                margin: 0;
                padding: 0;
        }
        .listItem {
                margin: 1rem 0;
                display: flex;
                justify-content: flex-start;
                align-items: center;
        }
        listItem & > div:last-child {
                flex: 1;
                margin-left: 0.5rem;
        }

        .avatar {
                position: relative;
                width: 3em;
                height: 3em;
                background: var(--cmGrey);
                border-radius: 50%;
                overflow: hidden;

                img {
                        width: 100%;
                        height: 100%;
                        vertical-align: top;
                        object-fit: cover;
                }
        }

        .author-name {
                margin-left: 1rem;
        }
`;

function AuthorList({ items, title }) {
        return (
                <AuthorListStyles>
                        <h2 className="headline h5">{title}</h2>
                        <ul className="list">
                                {items.map(({ author, _key }) => {
                                        const authorName = author && author.name;
                                        return (
                                                <li key={_key} className="listItem">
                                                        <div>
                                                                <div className="avatar">
                                                                        {author &&
                                                                                author.image &&
                                                                                author.image.asset && (
                                                                                        <img
                                                                                                src={imageUrlFor(
                                                                                                        buildImageObj(
                                                                                                                author.image
                                                                                                        )
                                                                                                )
                                                                                                        .width(100)
                                                                                                        .height(100)
                                                                                                        .fit('crop')
                                                                                                        .url()}
                                                                                                alt=""
                                                                                        />
                                                                                )}
                                                                </div>
                                                        </div>
                                                        <div>
                                                                <div className="author-name">
                                                                        {authorName || <em>Missing name</em>}
                                                                </div>
                                                        </div>
                                                </li>
                                        );
                                })}
                        </ul>
                </AuthorListStyles>
        );
}

export default AuthorList;
