import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import CTALink from './CTALink';
// import NavIcon from './NavIcon';
import NavMobile from './NavMobile';
import { useScrollPosition } from '../utils/getScrollPosition';
import NavIcon from './NavIcon';

const NavStyles = styled.div`
        /* position: -webkit-sticky; Safari */
        background-color: var(--cmGrey);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 1rem var(--sidePadding);
        z-index: 100;

        :hover {
                opacity: 100%;
        }

        .nav-items-container {
                ul {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                }
                li {
                        display: flex;
                        margin: 0 1.5rem;
                }
        }

        [aria-current]:not([aria-current='false']) {
                ::after {
                        position: absolute;
                        content: '';
                        height: 0.25em;
                        bottom: 3px;
                        margin: 0 auto;
                        left: 0;
                        right: 0;
                        width: 100%;
                        background: var(--cmLightOrange);
                }
        }

        @media screen and (max-width: 900px) {
                .nav-items-container {
                        display: none;
                }
        }
        @media screen and (max-width: 500px) {
                .site-tite {
                        width: 5rem;
                }
        }
`;

const Nav = ({ scroll, showNav, siteTitle, navMenuItems = [] }) => (
        <Headroom>
                <NavStyles>
                        <div className="site-tite-container">
                                <span className="orange-underline-link">
                                        <Link className="site-tite" to="/">
                                                {siteTitle}
                                        </Link>
                                </span>
                        </div>

                        {showNav && navMenuItems && (
                                <div className="nav-items-container">
                                        <ul>
                                                {navMenuItems.map((i) => (
                                                        <li className="text-lg">
                                                                <CTALink {...i} />
                                                        </li>
                                                ))}
                                        </ul>
                                </div>
                        )}
                        <NavIcon />
                </NavStyles>
        </Headroom>
);

export default Nav;
