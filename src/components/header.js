import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import CTALink from './CTALink';

const HeaderStyles = styled.nav`
        position: -webkit-sticky; /* Safari */
        position: sticky;
        top: 0;
        background-color: var(--cmBlue);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 4.13rem;
        z-index: 100;
`;

const Header = ({ showNav, siteTitle, navMenuItems = [] }) => (
        <HeaderStyles>
                <div>
                        <div>
                                <Link to="/">{siteTitle}</Link>
                        </div>

                        {showNav && navMenuItems && (
                                <div id="nav-content">
                                        <ul>
                                                {navMenuItems.map((i) => (
                                                        <li>
                                                                <CTALink {...i} />
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                        )}
                </div>

                <hr />
        </HeaderStyles>
);

export default Header;
